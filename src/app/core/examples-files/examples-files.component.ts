import { Component, OnInit } from '@angular/core';
import {FileElement} from '../../file-manager/model/element';
import {Observable} from 'rxjs';
import {FileService} from '../../services/file.service';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-examples-files',
  templateUrl: './examples-files.component.html',
  styleUrls: ['./examples-files.component.scss']
})
export class ExamplesFilesComponent implements OnInit {
  public fileElements: Observable<FileElement[]>;
  navigationExtras: NavigationExtras;

  constructor(public fileService: FileService, public router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation != null) {
      const state = navigation.extras.state as {
        data: Array<FileElement>
      };
      for (const file of state.data) {
        this.fileService.add({
          content: file.content,
          path: file.path,
          name: file.name,
          isFolder: file.isFolder,
          parent: file.parent,
          id: file.id
        });
      }
    }
  }

  currentRoot: FileElement;
  currentPath: string;
  canNavigateUp = false;

  ngOnInit() {
    // this.fileService.add({content: '', path: '', name: 'Cours 1', isFolder: true, parent: 'root', id: '1' });
    // this.fileService.add({content: '', path: '', name: 'Cours 2', isFolder: true, parent: 'root', id: '2' });
    // this.fileService.add({content: '', path: '', name: 'loop.ml', isFolder: false, parent: '1',  id: '3' });
    // this.fileService.add({content: '', path: '', name: 'or.ml', isFolder: false, parent: '1',  id: '4' });
    // this.fileService.add({content: '', path: '', name: 'fact.ml', isFolder: false, parent: '2',  id: '5' });
    // this.fileService.add({content: '', path: '', name: 'and.ml', isFolder: false, parent: 'root',  id: '6' });

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

  onSelect(e: FileElement) {
    this.navigationExtras = {
      state: {
        data: e.content
      }
    };
    this.router.navigate(['/eval'], this.navigationExtras);
  }
}
