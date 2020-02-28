import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService } from './dialog/dialog.service';
import { PromptDialogComponent } from './prompt-dialog/prompt-dialog.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule,
    FormsModule
  ],
  declarations: [PromptDialogComponent],
  entryComponents: [PromptDialogComponent],
  providers: [DialogService]
})
export class DialogsModule { }
