import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NodeComponent } from './node/node.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    NotFoundPageComponent,
    NodeComponent
  ],
  exports: [
      NavBarComponent,
      FooterComponent,
      NotFoundPageComponent,
      NodeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
