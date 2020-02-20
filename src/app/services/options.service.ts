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
    mapOptions.set('MoveDownSubst', {name: 'MoveDownSubst', index: 0, valueDefault: false});
    mapOptions.set('SubstCombine', {name: 'SubstCombine', index: 1, valueDefault: false});
    mapOptions.set('SubstVar', {name: 'SubstVar', index: 2, valueDefault: false});
    mapOptions.set('SubstFun', {name: 'SubstFun', index: 3, valueDefault: false});
    mapOptions.set('If', {name: 'If', index: 4, valueDefault: false});
    mapOptions.set('Let', {name: 'Let', index: 5, valueDefault: false});
    mapOptions.set('Match', {name: 'Match', index: 6, valueDefault: false});
    mapOptions.set('Fun', {name: 'Fun', index: 7, valueDefault: false});
    mapOptions.set('ApplyFunRuntime', {name: 'ApplyFunRuntime', index: 8, valueDefault: false});
    mapOptions.set('ApplyFunComplete', {name: 'ApplyFunComplete', index: 9, valueDefault: false});
    mapOptions.set('Exn', {name: 'Exn', index: 10, valueDefault: false});
    mapOptions.set('Seq', {name: 'Seq', index: 11, valueDefault: false});
    mapOptions.set('Record', {name: 'Record', index: 12, valueDefault: false});
    mapOptions.set('ApplyFun', {name: 'ApplyFun', index: 13, valueDefault: false});
    return mapOptions;
  }
}
