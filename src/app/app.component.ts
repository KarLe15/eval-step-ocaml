import {Component, OnInit} from '@angular/core';
import {ReplaySubject} from 'rxjs';
import {EvalService} from './services/eval.service';
import {LazyLoadScriptService} from './services/lazy-load-script.service';
import {GetAssetsFilesService} from './services/get-assets-files.service';
import {FileElement} from './file-manager/model/element';


interface ISampleFile {
  filepath: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    EvalService,
    LazyLoadScriptService,
    GetAssetsFilesService
  ]
})
export class AppComponent implements OnInit {
  title = 'evalStep';
  isLoaded = false;
  cptLoading = 0;

  private filesSubject: ReplaySubject<Array<FileElement>> = new ReplaySubject<Array<FileElement>>();
  constructor(
    private evalStep: EvalService,
    private lazyLoadService: LazyLoadScriptService,
    private getAssetsFile: GetAssetsFilesService
  ) {}

  ngOnInit() {
    this.initScriptEvaluation();
    this.getAllSampleFiles();
  }

  private initScriptEvaluation() {
    this.lazyLoadService.loadScript('/assets/js/eval_step.js').subscribe(_ => {
      console.log('eval_step loaded!');
      this.evalStep.getIsLoadedLibraries().subscribe(value => {
        if (value) {
          this.addLoading();
        }
      });
      this.evalStep.setupOptions();
      this.evalStep.loadLibraries();
    });
  }

  private getAllSampleFiles() {
    this.getAssetsFile.getFile('assets/codeSample/contents.json').then(contentsT => {
      const res: Array<FileElement> = [];
      const content: Array<FileElement> = JSON.parse(contentsT);
      for (const file of content) {
        if (! file.isFolder) {
          this.getAssetsFile.getFile('assets/codeSample/' + file.path).then(contentFile => {
            res.push({path: file.path, id: file.id, content: contentFile, isFolder: false, name: file.name, parent: file.parent});
            if (res.length === content.length) {
              this.filesSubject.next(res);
              // this.addLoading();
            }
          }).catch(err => {
            console.error('error while loading file', file.path, err);
          });
        } else {
          res.push({path: file.path, id: file.id, content: '', isFolder: true, name: file.name, parent: file.parent});
        }
      }
    }).catch(err => {
      console.error('error while loading contents file', err);
    });
  }
  private addLoading() {
    this.cptLoading++;
    if (this.cptLoading === 1) {
      this.isLoaded = true;
    }
  }
}
