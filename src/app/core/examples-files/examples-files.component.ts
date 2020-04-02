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
    const folder1 = this.fileService.add({content: '', path: '', name: 'Cours 1', isFolder: true, parent: 'root', id: '1' });
    const folder2 = this.fileService.add({content: '', path: '', name: 'Cours 2', isFolder: true, parent: 'root', id: '2' });
    this.fileService.add({content: '', path: '', name: 'loop.ml', isFolder: false, parent: folder1.id,  id: '3' });
    this.fileService.add({content: '', path: '', name: 'or.ml', isFolder: false, parent: folder1.id,  id: '4' });
    this.fileService.add({content: '', path: '', name: 'fact.ml', isFolder: false, parent: folder2.id,  id: '5' });
    this.fileService.add({content: '', path: '', name: 'and.ml', isFolder: false, parent: 'root',  id: '6' });

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
