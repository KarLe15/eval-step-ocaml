import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('defFuns') defFuns: string;
  // tslint:disable-next-line:no-input-rename
  @Input('defMain') defMain: string;
  constructor() { }

  ngOnInit() {
  }

  onPrevious() {
    console.log('previous');
  }

  onNext() {
    console.log('next');
  }
}
