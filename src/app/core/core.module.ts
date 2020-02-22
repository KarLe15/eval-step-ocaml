import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor/editor.component';
import { OptionsComponent } from './options/options.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule} from '@angular/forms';
import {MonacoEditorModule} from 'ngx-monaco-editor';

import {EvalService} from '../services/eval.service';

import { ResultComponent } from './result/result.component';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import { UiSwitchModule } from 'ngx-ui-switch';
import {AppModule} from '../app.module';
import {ReplaceNPipe} from '../pipes/replace-n.pipe';
import {HIGHLIGHT_OPTIONS, HighlightModule, HighlightOptions} from 'ngx-highlightjs';


// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    EditorComponent,
    OptionsComponent,
    MainPageComponent,
    ResultComponent,
    ReplaceNPipe
  ],
  exports: [
    EditorComponent,
    OptionsComponent,
    MainPageComponent,
    ReplaceNPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MonacoEditorModule,
    ScrollToModule.forRoot(),
    UiSwitchModule,
    HighlightModule
  ],
  providers: [
    EvalService,
    ReplaceNPipe,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumbers: true
      }
    }
  ]
})
export class CoreModule { }
