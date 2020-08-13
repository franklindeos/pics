import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.modules';
import { AppComponent } from './app.component';
import { ErrorsModule } from './errors/errors.module';
import { PhotosModule } from './photos/photos.module';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ErrorsModule,
    PhotosModule,
    HomeModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
