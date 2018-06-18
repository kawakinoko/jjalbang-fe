import { NgModule } from '@angular/core';
import { MatCardModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule
  ],
  declarations: []
})
export class MaterialModule { }
