import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  private data: string;
  evaluate = false;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log(this.data);
    this.evaluate = true;
  }

  onChange(eventArgs) {
    this.data = eventArgs;
  }

}
