import {Component, OnInit} from '@angular/core';
import {EvalService} from './services/eval.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [EvalService]
})
export class AppComponent implements OnInit {
  title = 'evalStep';

  constructor(private evalStep: EvalService) {
  }
  ngOnInit() {
    console.log(this.evalStep.getDataStructure());
  }
}
