import { Injectable } from '@angular/core';
import IEvaluation from '../structures/IEvaluation';
import IStep from '../structures/IStep';
import {IEnvironment} from '../structures/IEnvironement';
import IExpression from '../structures/IExpression';
import IRange from '../structures/IRange';
import IOption from '../structures/IOption';
import { GetAssetsFilesService } from './get-assets-files.service';
import {Observable, Subject} from 'rxjs';
import {Strategy} from '../structures/Strategy';

interface GlobalOptions {
  get_range: () => boolean;
  set_range: (value: boolean) => void;
}

declare var get_evaluation_steps: (expression: string) => string;
declare var global_options: GlobalOptions;
declare var reload_libraries: (pervasives: string, otherlibraries: Array<[string, string]>) => void;

@Injectable({
  providedIn: 'root'
})
export class EvalService {

  isLibrariesLoaded: Subject<boolean> = new Subject<boolean>();
  constructor(private getFilesService: GetAssetsFilesService) {}
  // =======================================================================
  //
  // =======================================================================
  // TODO :: Add get range for subenvironment
  private getSubEnvironementsfromJson(expr: any): IExpression {
    console.log('getting sub env', expr);
    const toString: string = expr.expr.expr;
    let environements = null;
    if (expr.expr.envs) {
      const envs = expr.expr.envs;
      const keyEnvs = Object.keys(envs);
      environements = [];
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < keyEnvs.length; i++) {
        const env = envs[keyEnvs[i]];
        const keyEnv = Object.keys(env);
        const funEnvs = [];
        // tslint:disable-next-line:prefer-for-of
        for (let j = 0; j < keyEnv.length; j++) {
          const fun = env[keyEnv[j]];
          let corec = null;
          if (fun.corec.length !== 0) {
            corec = fun.corec;
          }
          const funEnv = this.getSubEnvironementsfromJson(fun);
          funEnvs.push({
            corec,
            name: keyEnv[j],
            funEnv
          });
        }
        environements.push({
          id: i,
          items: funEnvs
        });
      }
    }
    return {
      toString,
      environements
    };
  }
  // =======================================================================
  //
  // =======================================================================
  private getEnvironementsFromJSONStep(step: any): Array<IEnvironment> | null {
    if (step.current_expression.envs) {
      const context = step.current_expression.envs;
      const keysIndex = Object.keys(context);
      const res: Array<IEnvironment> = [];
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < keysIndex.length; i++) {
        const range: IRange | null = this.getRangeFromEnvironementJSON(keysIndex[i]);
        const env = context[keysIndex[i]];
        const keysEnv = Object.keys(env);
        const itemsEnv = [];
        // tslint:disable-next-line:prefer-for-of
        for (let j = 0; j < keysEnv.length ; j++) {
          const varEnv = env[keysEnv[j]];
          let corec = null;
          if (varEnv.corec.length !== 0) {
            corec = varEnv.corec;
          }
          console.log('before subEnv', env);
          const expr = this.getSubEnvironementsfromJson(varEnv);
          itemsEnv.push({
            corec,
            name: keysEnv[i],
            expr,
            range
          });
        }
        res.push({
          id: i,
          items: itemsEnv
        });
      }
      return res;
    }
    return null;
  }

  private getRangeFromEnvironementJSON(s: string): IRange | null {
    if (!s.includes('File') || !s.includes('line') || !s.includes('characters')) {
      return null;
    }
    const regex  = /[0-9]+/g;
    const splits = s.split(',');
    const line   = parseInt(splits[1].substr(splits[1].length - 1), 10);
    const range  = splits[2].match(regex);
    const start  = parseInt(range[0], 10);
    const end    = parseInt(range[1], 10);
    return {
      line,
      start,
      end
    };
  }
  // =======================================================================
  //
  // =======================================================================
  private getExpressionFromJSONstep(step: any): IExpression {
    const environements = this.getEnvironementsFromJSONStep(step);
    return {
      toString: step.current_expression.expr,
      environements
    };
  }
  // =======================================================================
  //
  // =======================================================================
  private getStepFromJSONStep(steps: any, index: number, previous: IStep): IStep {
    const step: any = steps[index];
    const currentExpression = this.getExpressionFromJSONstep(step);
    let next = null;
    let name = null;
    let subst = null;
    if (index !== steps.length - 1) {
      next = this.getStepFromJSONStep(steps, (index + 1), undefined );
    }
    if (step.step.length !== 0) {
      name = step.step[0].name;
      const substsKey = Object.keys(step.step[0].args);// this is very format dependant
      if (substsKey.length > 0) {
        subst = step.step[0].args[substsKey[0]];
      }
    }
    const res =  {
      currentExpression,
      previous,
      nexts: [{
        name,
        step: next,
        subst
      }]
    };
    if (next !== null) {
      next.previous = res;
    }
    return res;
  }
  // =======================================================================
  //
  // =======================================================================
  private parseJSONToIEvaluation(content: string, firstExpression: string): IEvaluation {
    const json: Array<any> = JSON.parse(content);
    const firstStep = this.getStepFromJSONStep(json, 0, null);
    return {
      firstExpression,
      firstStep
    };
  }

  /**
   * Public function available for this service
   */
  public getDataStructure(expression: string, firstExpression: string): IEvaluation {
      const evals = get_evaluation_steps(expression);
      return this.parseJSONToIEvaluation(evals, firstExpression);
  }
  public getEvaluationsWithFilter(expressions: IEvaluation, strategy: Strategy | null): IEvaluation {
    console.log('filtring ', expressions);
    let currentStep = expressions.firstStep;
    while (currentStep !== null) {
      currentStep = this.getNextStep(currentStep);
    }
    return expressions;
  }
  // =======================================================================
  //
  // =======================================================================
  public getFirstStep(evaluations: IEvaluation): IStep {
    return evaluations.firstStep;
  }
  // =======================================================================
  //
  // =======================================================================
  public getNextStep(current: IStep): IStep | null {
    let next: IStep | null = null;
    if (current.nexts !== null) {
      next = current.nexts[0].step;
    }
    // console.log(next);
    return next;
  }
  // =======================================================================
  //
  // =======================================================================
  // TODO :: add Strategy
  public getPreviousStep(current: IStep): IStep | null {
    return current.previous;
  }
  // =======================================================================
  //                      Libraries functions
  // =======================================================================
  public setupOptions() {
    global_options.set_range(true);
  }
  public loadLibraries() {
    this.getFilesService.getFile('assets/libs/contents.json').then(contents => {
      const libsCharged: Array<[string, string]> = [];
      const contentJSON: Array<{name: string, path: string}> = JSON.parse(contents); // ugly must change
      const libCount  = contentJSON.length;
      let libChargedCount = 0;
      let pervasive = '';
      for (let i = 0; i < libCount; i++) {
        const filePath = 'assets/libs/' + contentJSON[i].path;
        const name     = contentJSON[i].name;
        this.getFilesService.getFile(filePath).then(contentFile => {
          if (name === 'pervasives') {
            pervasive = contentFile;
          } else {
            libsCharged.push([name, contentFile]);
          }
          libChargedCount++;
          if (libChargedCount === libCount) {
            reload_libraries(pervasive, libsCharged);
            this.isLibrariesLoaded.next(true);
            console.log('libraries loaded');
          }
        });
      }
    });
  }
  public getIsLoadedLibraries(): Observable<boolean> {
    return this.isLibrariesLoaded.asObservable();
  }
}
