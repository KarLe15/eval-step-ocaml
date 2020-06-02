import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {HighlightResult} from 'ngx-highlightjs';
import IStep from '../../structures/IStep';
import {ReplaceNPipe} from '../../pipes/replace-n.pipe';
import {IEnvironment, ItemEnvironement} from '../../structures/IEnvironement';
@Component({
  selector: 'app-result-liste',
  templateUrl: './result-liste.component.html',
  styleUrls: ['./result-liste.component.scss']
})
export class ResultListeComponent implements OnInit, OnChanges {
  @Input('currentStep') currentStep: IStep;
  @Input('etape') etape: number;

  response: HighlightResult;
  printDefinition = false;
  constructor() { }
  ngOnInit() {
    this.etape = 0;
  }

  ngOnChanges() {
    // const str = this.currentStep.currentExpression.toString;
    // this.currentStep.currentExpression.environements.forEach((item, index) => {
    //   this.currentStep.currentExpression.toString =
    //     ((str.slice(0, item.items[0].range.end)).concat(String("[",index,"]"))).concat((str.slice(item.items[0].range.end, str.length )));
    // });
  }

  replaceAt = function(str, index, replacement) {
    return str.substr(0, index) + replacement + this.substr(index + replacement.length);
  }

  onHighlight(e) {
    // console.log('highlight', e);
    this.response = {
      language: 'ocaml',
      relevance: e.relevance,
      second_best: '{...}',
      top: '{...}',
      value: e.value
      // value: '{...}'
    };
  }

  isEnvEmpty() {
    // @ts-ignore
    return this.currentStep.currentExpression.environements.length;
  }

  onValueChange() {
    this.printDefinition = !this.printDefinition;
    console.log(this.printDefinition);
  }

  checkFun(s: string) {
    return s.startsWith('fun');
  }

  select(e: MouseEvent) {
    console.log(e);
  }
}
