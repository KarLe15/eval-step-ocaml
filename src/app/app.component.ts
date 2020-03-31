import {Component, OnInit} from '@angular/core';
import {EvalService} from './services/eval.service';
import {LazyLoadScriptService} from './services/lazy-load-script.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    EvalService,
    LazyLoadScriptService
  ]
})
export class AppComponent implements OnInit {
  title = 'evalStep';
  isLoaded = false;

  constructor(
    private evalStep: EvalService,
    private lazyLoadService: LazyLoadScriptService
  ) {}
  ngOnInit() {
    this.lazyLoadService.loadScript('/assets/js/eval_step.js').subscribe(_ => {
      console.log('eval_step loaded!');
      this.evalStep.setupOptions();
      this.isLoaded = true;
    });
    // console.log(this.evalStep.getDataStructure());
  }
}
