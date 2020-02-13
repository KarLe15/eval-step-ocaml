import { Injectable } from '@angular/core';
import IOption from '../structures/IOption';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  constructor() {
  }

  public getOptions(){
    let mapOptions = new Map<string, IOption>();
    mapOptions.set('MoveDownSubst', {name: 'MoveDownSubst', index: 0, valueDefault: true});
    mapOptions.set('SubstCombine', {name: 'SubstCombine', index: 1, valueDefault: true});
    mapOptions.set('SubstVar', {name: 'SubstVar', index: 2, valueDefault: true});
    mapOptions.set('SubstFun', {name: 'SubstFun', index: 3, valueDefault: true});
    mapOptions.set('If', {name: 'If', index: 4, valueDefault: true});
    mapOptions.set('Let', {name: 'Let', index: 5, valueDefault: true});
    mapOptions.set('Match', {name: 'Match', index: 6, valueDefault: true});
    mapOptions.set('Fun', {name: 'Fun', index: 7, valueDefault: true});
    mapOptions.set('ApplyFunRuntime', {name: 'ApplyFunRuntime', index: 8, valueDefault: true});
    mapOptions.set('ApplyFunComplete', {name: 'ApplyFunComplete', index: 9, valueDefault: true});
    mapOptions.set('Exn', {name: 'Exn', index: 10, valueDefault: true});
    mapOptions.set('Seq', {name: 'Seq', index: 11, valueDefault: true});
    mapOptions.set('Record', {name: 'Record', index: 12, valueDefault: true});
    mapOptions.set('ApplyFun', {name: 'ApplyFun', index: 13, valueDefault: true});
    return mapOptions;
  }
}
