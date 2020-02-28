import { NgModule } from '@angular/core';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatListModule,
  MatDialogModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatListModule,
    MatDialogModule, MatInputModule],
  exports: [MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatListModule,
    MatDialogModule, MatInputModule]
})
export class MaterialDesignModule { }
