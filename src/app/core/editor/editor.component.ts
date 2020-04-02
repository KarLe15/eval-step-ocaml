import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  // tslint:disable-next-line:no-output-rename
  @Output('changeMain') changeMain = new EventEmitter();
  @Output('changeFun') changeFun = new EventEmitter();
  @Input('codeFun') codeFun: string;
  editorOptions = {theme: 'vs-dark', fontSize: '18px', autoIndent: 'full', language: 'fsharp'};
  codeMain = 'fact 5';
  constructor() { }

  ngOnInit() {
  }

  onKeyUpMain() {
    this.changeMain.emit(this.codeMain);
  }

  onKeyUpFun() {
    this.changeFun.emit(this.codeFun);
  }

}
