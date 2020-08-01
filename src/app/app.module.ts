import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.modules';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorsModule } from './errors/errors.module';
import { PhotosModule } from './photos/photos.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ErrorsModule,
    PhotosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
