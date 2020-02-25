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
    }
  }

}
