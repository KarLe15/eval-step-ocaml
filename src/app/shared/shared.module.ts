import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {ParticlesModule} from 'angular-particle';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    NotFoundPageComponent
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    NotFoundPageComponent
  ],
    imports: [
        CommonModule,
    ]
})
export class SharedModule { }
