import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileManagerComponent} from './file-manager.component';
import {FormsModule} from '@angular/forms';
import {MatDialogModule, MatGridListModule, MatIconModule, MatInputModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    FileManagerComponent
  ],
    imports: [
        CommonModule,
        MatMenuModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatToolbarModule,
        MatDialogModule,
        MatInputModule,
        FormsModule,
    ],
  exports: [
    FileManagerComponent,
  ]
})
export class FileManagerModule {}
