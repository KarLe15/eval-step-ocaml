import {Component, Input, OnChanges, Output, EventEmitter, SimpleChanges} from '@angular/core';
import {FileElement} from './model/element';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnChanges  {
  constructor() {}

  @Input('fileElements') fileElements: FileElement[];
  @Input() canNavigateUp: string;
  @Input() path: string;

  @Output() selectExemple = new EventEmitter<FileElement>();
  @Output() navigatedDown = new EventEmitter<FileElement>();
  @Output() navigatedUp = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {}

  navigate(element: FileElement) {
    if (element.isFolder) {
      this.navigatedDown.emit(element);
    } else {
      this.selectExemple.emit(element);
    }
  }

  navigateUp() {
    this.navigatedUp.emit();
  }


}
