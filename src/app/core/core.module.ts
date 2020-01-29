import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor/editor.component';
import { OptionsComponent } from './options/options.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule} from '@angular/forms';
import {MonacoEditorModule} from 'ngx-monaco-editor';
import { ResultComponent } from './result/result.component';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import { UiSwitchModule } from 'ngx-ui-switch';

@NgModule({
  declarations: [
    EditorComponent,
    OptionsComponent,
    MainPageComponent,
    ResultComponent
  ],
  exports: [
    EditorComponent,
    OptionsComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MonacoEditorModule,
    UiSwitchModule,
    ScrollToModule.forRoot()
  ]
})
export class CoreModule { }
