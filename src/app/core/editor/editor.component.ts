import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  // tslint:disable-next-line:no-output-rename
  @Output('changeMain') changeMain = new EventEmitter();
  @Output('changeFun') changeFun = new EventEmitter();

  editorOptions = {theme: 'vs-dark', fontSize: '18px', autoIndent: 'full', language: 'fsharp'};
  codeFun = ' let x = 1 in x + 1 ';
  codeMain = 'let _ = ';
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
