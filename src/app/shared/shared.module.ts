import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {ParticlesModule} from 'angular-particle';
import { NodeComponent } from './node/node.component';



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
    ]
})
export class SharedModule { }
