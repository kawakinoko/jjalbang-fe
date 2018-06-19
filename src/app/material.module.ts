import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatGridListModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ],
  declarations: []
})
export class MaterialModule { }
