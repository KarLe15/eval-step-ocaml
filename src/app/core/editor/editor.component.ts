import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  // tslint:disable-next-line:no-output-rename
  @Output('saisir') change = new EventEmitter();

  editorOptions = {theme: 'vs-dark', language: 'fsharp'};
  codeFun = ' let x = 1 in x + 1 ';
  codeMain = 'let _ = '
  constructor() { }

  ngOnInit() {
  }

  onKeyUp() {
    this.change.emit(this.codeFun);
  }


}
