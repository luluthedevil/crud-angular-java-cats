import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { PersonalityPipe } from './pipes/personality.pipe';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    PersonalityPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrorDialogComponent,
    PersonalityPipe
  ]
})
export class SharedModule { }
