import {Component, Input, OnInit} from '@angular/core';
import {HighlightResult} from 'ngx-highlightjs';
import IStep from '../../structures/IStep';
@Component({
  selector: 'app-result-liste',
  templateUrl: './result-liste.component.html',
  styleUrls: ['./result-liste.component.scss']
})
export class ResultListeComponent implements OnInit {
  @Input('currentStep') currentStep: IStep;
  @Input('etape') etape: number;

  response: HighlightResult;
  constructor() { }
  ngOnInit() {
    this.etape = 0;
  }


  onHighlight(e) {
    // console.log('highlight', e);
    this.response = {
      language: 'ocaml',
      // language: e.language,
      relevance: e.relevance,
      second_best: '{...}',
      top: '{...}',
      value: e.value
      // value: '{...}'
    };
  }

  nameEnv() {
    return this.currentStep.currentExpression.environements[0].items[0].name;
  }
  isEnvEmpty() {
    // @ts-ignore
    return this.currentStep.currentExpression.environements.length;
  }
}
