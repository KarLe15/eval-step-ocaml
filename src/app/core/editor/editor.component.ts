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
  code = ' let x = 1 in x + 1 ';
  constructor() { }

  ngOnInit() {
  }

  onKeyUp() {
    this.change.emit(this.code);
  }


}
