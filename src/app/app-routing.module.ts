import { ImageframeComponent } from './imageframe/imageframe.component';
import { RouterModule, Routes } from '@angular/router';
import { UploaderComponent } from './uploader/uploader.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: ImageframeComponent },
  { path: 'uploader', component: UploaderComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
