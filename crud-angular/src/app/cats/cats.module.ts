import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CatFormComponent } from './cat-form/cat-form.component';
import { CatsRoutingModule } from './cats-routing.module';
import { CatsComponent } from './cats/cats.component';


@NgModule({
  declarations: [
    CatsComponent,
    CatFormComponent
  ],
  imports: [
    CommonModule,
    CatsRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CatsModule { }
