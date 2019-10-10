import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeViewComponent } from './views/home-view/home-view.component';
import { ImagesViewComponent } from './views/images-view/images-view.component';

const routes: Routes = [

  { path: 'home', component: HomeViewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'images', component: ImagesViewComponent }

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
