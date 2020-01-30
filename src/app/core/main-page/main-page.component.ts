import { Component, OnInit } from '@angular/core';
import {EvalService} from '../../services/eval.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  private defFun: string;
  evaluate = false;
  private defMain: string;

  private data: string;
  constructor(private evaluator: EvalService) { }
  ngOnInit() {
  }

  onClick() {
    this.evaluate = true;
  }

  onChangeFun(eventArgs) {
    this.defFun = eventArgs;
  }

  onChangeMain(eventArgs) {
    this.defMain = eventArgs;
  }
}
