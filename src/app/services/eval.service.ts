import { Injectable } from '@angular/core';
import IEvaluation from '../structures/IEvaluation';
import IStep from '../structures/IStep';
import {IEnvironment} from '../structures/IEnvironement';

@Injectable({
  providedIn: 'root'
})
export class EvalService {

  constructor() { }
  private getEnvironementFromJSONStep(step: any) {
    if (step.current_expression.envs) {
      const envs = step.current_expression.envs;
      const keys = Object.keys(envs);
      const res: Array<IEnvironment> = [];
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < keys.length; i++) {
        res.push({
          id: i,
          items: []
        });
        envs[keys[i]]
      }
      return res;
    }
    return null;
  }
  private parseJSONToIEvaluation(content: string, firstExpression: string): IEvaluation {
    const json: Array<any> = JSON.parse(content);
    const firstStep: IStep = {
      currentExpression: {
        toString: (json[0].current_expression.expr) as string,
        environements: null
      },
      nexts: null,
      previous: null
    };
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
