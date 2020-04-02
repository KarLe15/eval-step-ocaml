import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './core/main-page/main-page.component';
import {NotFoundPageComponent} from './shared/not-found-page/not-found-page.component';
import {ExamplesFilesComponent} from './core/examples-files/examples-files.component';


const routes: Routes = [
  {path: 'eval', component: MainPageComponent},
  {path: 'exemples', component: ExamplesFilesComponent},
  {path: '', redirectTo: '/eval', pathMatch: 'full'},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
