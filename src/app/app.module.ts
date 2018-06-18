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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
