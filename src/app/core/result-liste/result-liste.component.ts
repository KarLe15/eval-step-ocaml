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
    // for (const item of this.currentStep.currentExpression.environements) {
    //   for (const e of item.items) {
    //     console.log(e.name);
    //     const regex = new RegExp(e.name, 'g');
    //     this.currentStep.currentExpression.toString = this.currentStep.currentExpression.toString.replace(regex, '<span class="undeline">'.concat(e.name).concat('</span>'));
    //   }
    //   // const regex = new RegExp('[a-z]', 'g');
    //   // this.currentStep.currentExpression.toString = this.currentStep.currentExpression.toString.replace(regex, '\n-');
    // }
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

  me(e: ItemEnvironement) {
    const pipe = new ReplaceNPipe();
    console.log(pipe.transform(this.currentStep.currentExpression.toString, e.range.start, e.range.end));
  }
}
