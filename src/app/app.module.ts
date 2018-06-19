import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ImageframeComponent } from './imageframe/imageframe.component';
import { UploaderComponent } from './uploader/uploader.component';
import { MaterialModule } from './material.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FileDropModule } from 'ngx-file-drop';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UploaderService } from './uploader/uploader.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ImageframeComponent,
    UploaderComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    InfiniteScrollModule,
    FileDropModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [UploaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
