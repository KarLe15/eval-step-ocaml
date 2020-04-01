import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, ReplaySubject, Subject} from 'rxjs';
import {EvalService} from './services/eval.service';
import {LazyLoadScriptService} from './services/lazy-load-script.service';
import {GetAssetsFilesService} from './services/get-assets-files.service';
import {Strategy, StrategyFactory} from './structures/Strategy';


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
  private filesSubject      = new ReplaySubject<Array<ISampleFile>>();
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
      const res: Array<ISampleFile> = [];
      const content: Array<{name: string, path: string}> = JSON.parse(contentsT);
      for (const file of content) {
        this.getAssetsFile.getFile('assets/codeSample/' + file.path).then(contentFile => {
          res.push({filepath: file.path, content: contentFile});
          if (res.length === content.length) {
            this.filesSubject.next(res);
            // this.addLoading();
          }
        }).catch(err => {
          console.error('error while loading file', file.path, err);
        });
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
