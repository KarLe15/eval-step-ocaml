import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor/editor.component';
import { OptionsComponent } from './options/options.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule} from '@angular/forms';
import {MonacoEditorModule} from 'ngx-monaco-editor';
import {EvalService} from '../services/eval.service';

@NgModule({
  declarations: [
    EditorComponent,
    OptionsComponent,
    MainPageComponent
  ],
  exports: [
    EditorComponent,
    OptionsComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MonacoEditorModule
  ],
  providers: [
    EvalService
  ]
})
export class CoreModule { }
