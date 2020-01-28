import { Injectable } from '@angular/core';
import IEvaluation from '../structures/IEvaluation';
import IStep from '../structures/IStep';
import {IEnvironment} from '../structures/IEnvironement';
import IExpression from "../structures/IExpression";

@Injectable({
  providedIn: 'root'
})
export class EvalService {

  constructor() { }
  private getEnvironementsFromJSONStep(step: any): Array<IEnvironment> | null {
    if (step.current_expression.envs) {
      const context = step.current_expression.envs;
      const keysIndex = Object.keys(context);
      const res: Array<IEnvironment> = [];
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < keysIndex.length; i++) {
        const env = context[i];
        const keysEnv = Object.keys(env);
        const itemsEnv = [];
        // tslint:disable-next-line:prefer-for-of
        for (let j = 0; j < keysEnv.length ; j++) {
          const varEnv = env[keysEnv[j]];
          let corec = null;
          if (env.corec.length !== 0) {
            corec = varEnv.corec;
          }
          const expr = this.getExpressionFromJSONstep(varEnv);
          itemsEnv.push({
            corec,
            name: keysEnv[i],
            expr
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

  private getExpressionFromJSONstep(step: any): IExpression {
    const environements = this.getEnvironementsFromJSONStep(step);
    return {
      toString: step.expr,
      environements
    };
  }

  private getStepFromJSONStep(step: any, previous: IStep, next: IStep): IStep {
    const currentExpression = this.getExpressionFromJSONstep(step);
    return {
      currentExpression,
      previous,
      nexts: [{
        name: step.step[0],
        step: next
      }]
    };
  }
  private parseJSONToIEvaluation(content: string, firstExpression: string): IEvaluation {
    const json: Array<any> = JSON.parse(content);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 1; i < json.length; i++) {
      const stepJSON = json[i];

    }


    return {
      firstExpression,
      firstStep
    };
  }
}
