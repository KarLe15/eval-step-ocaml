import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  private defFun: string;
  evaluate = false;
  private defMain: string;
  constructor() { }

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
