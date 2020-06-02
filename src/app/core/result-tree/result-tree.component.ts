import {Component, Input, OnChanges, OnInit} from '@angular/core';
import IStep from '../../structures/IStep';
import {HighlightResult} from 'ngx-highlightjs';

@Component({
  selector: 'app-result-tree',
  templateUrl: './result-tree.component.html',
  styleUrls: ['./result-tree.component.scss']
})
export class ResultTreeComponent implements OnInit, OnChanges {
  @Input('currentStep') currentStep: IStep;

  response: HighlightResult;
  printEnv = false;
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    console.log('here');
    //this.currentStep.currentExpression.toString
    //this.currentStep.currentExpression.toString = '<span tooltip="Tooltip text" placement="top">Tooltip on top</span>';
  }

  onHighlight(e) {
    this.response = {
      language: e.language,
      relevance: e.relevance,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    };
  }

  printEnvironement() {
    this.printEnv = true;
  }
}
