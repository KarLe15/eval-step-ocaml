import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor/editor.component';
import { OptionsComponent } from './options/options.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule} from '@angular/forms';
import {MonacoEditorModule} from 'ngx-monaco-editor';

import {EvalService} from '../services/eval.service';



import { ResultComponent } from './result/result.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { UiSwitchModule } from 'ngx-ui-switch';
import {ReplaceNPipe} from '../pipes/replace-n.pipe';
import {HIGHLIGHT_OPTIONS, HighlightModule, HighlightOptions} from 'ngx-highlightjs';
import { ResultTreeComponent } from './result-tree/result-tree.component';
import { SharedModule } from '../shared/shared.module';
import { ResultListeComponent } from './result-liste/result-liste.component';
import {GetAssetsFilesService} from '../services/get-assets-files.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ExamplesFilesComponent } from './examples-files/examples-files.component';
import {MatCardModule} from '@angular/material';
import {FileManagerModule} from '../file-manager/file-manager.module';
import {RouterModule} from '@angular/router';
import { NgxLoadingModule } from 'ngx-loading';
import {TooltipModule, TooltipOptions} from 'ng2-tooltip-directive';
import {MyDefaultTooltipOptions} from '../structures/MyDefaultTooltipOptions';




// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    EditorComponent,
    OptionsComponent,
    MainPageComponent,
    ResultComponent,
    ReplaceNPipe,
    ResultTreeComponent,
    ResultListeComponent,
    ExamplesFilesComponent
  ],
  exports: [
    EditorComponent,
    OptionsComponent,
    MainPageComponent,
    ReplaceNPipe,
    ExamplesFilesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FileManagerModule,
    MonacoEditorModule,
    ScrollToModule.forRoot(),
    NgxLoadingModule.forRoot({}),
    UiSwitchModule,
    HighlightModule,
    SharedModule,
    HttpClientModule,
    MatCardModule,
    RouterModule,
    TooltipModule,
    TooltipModule.forRoot(MyDefaultTooltipOptions as TooltipOptions)
  ],
  providers: [
    EvalService,
    GetAssetsFilesService,
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
