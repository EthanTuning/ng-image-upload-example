import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AngularFileUploaderModule } from 'angular-file-uploader';

import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { WelcomeHeaderComponent } from './components/welcome-header/welcome-header.component';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { ImagesViewComponent } from './views/images-view/images-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageViewerComponent,
    TopBarComponent,
    WelcomeHeaderComponent,
    ImageUploaderComponent,
    HomeViewComponent,
    ImagesViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    AngularFileUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
