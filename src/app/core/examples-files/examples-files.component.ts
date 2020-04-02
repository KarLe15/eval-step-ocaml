import { Component, OnInit } from '@angular/core';
import {FileElement} from '../../file-manager/model/element';
import {Observable} from 'rxjs';
import {FileService} from '../../services/file.service';

@Component({
  selector: 'app-examples-files',
  templateUrl: './examples-files.component.html',
  styleUrls: ['./examples-files.component.scss']
})
export class ExamplesFilesComponent implements OnInit {
  public fileElements: Observable<FileElement[]>;

  constructor(public fileService: FileService) {}

  currentRoot: FileElement;
  currentPath: string;
  canNavigateUp = false;

  ngOnInit() {
    const folder1 = this.fileService.add({ name: 'Cours 1', isFolder: true, parent: 'root' });
    const folder2 = this.fileService.add({ name: 'Cours 2', isFolder: true, parent: 'root' });
    this.fileService.add({ name: 'loop.ml', isFolder: false, parent: folder1.id });
    this.fileService.add({ name: 'or.ml', isFolder: false, parent: folder1.id });
    this.fileService.add({ name: 'fact.ml', isFolder: false, parent: folder2.id });
    this.fileService.add({ name: 'and.ml', isFolder: false, parent: 'root' });

    this.updateFileElementQuery();
  }

  navigateToFolder(element: FileElement) {
    this.currentRoot = element;
    this.updateFileElementQuery();
    this.currentPath = this.pushToPath(this.currentPath, element.name);
    this.canNavigateUp = true;
  }

  navigateUp() {
    if (this.currentRoot && this.currentRoot.parent === 'root') {
      this.currentRoot = null;
      this.canNavigateUp = false;
      this.updateFileElementQuery();
    } else {
      this.currentRoot = this.fileService.get(this.currentRoot.parent);
      this.updateFileElementQuery();
    }
    this.currentPath = this.popFromPath(this.currentPath);
  }

  updateFileElementQuery() {
    this.fileElements = this.fileService.queryInFolder(this.currentRoot ? this.currentRoot.id : 'root');
  }

  pushToPath(path: string, folderName: string) {
    let p = path ? path : '';
    p += `${folderName}/`;
    return p;
  }

  popFromPath(path: string) {
    let p = path ? path : '';
    const sp = p.split('/');
    sp.splice(sp.length - 2, 1);
    p = sp.join('/');
    return p;
  }

}
