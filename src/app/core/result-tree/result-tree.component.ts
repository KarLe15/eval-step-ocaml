import {Component, Input, OnInit} from '@angular/core';
import IStep from '../../structures/IStep';
import {HighlightResult} from 'ngx-highlightjs';

@Component({
  selector: 'app-result-tree',
  templateUrl: './result-tree.component.html',
  styleUrls: ['./result-tree.component.scss']
})
export class ResultTreeComponent implements OnInit {
  @Input('currentStep') currentStep: IStep;

  response: HighlightResult;
  constructor() { }

  ngOnInit() {
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
}
