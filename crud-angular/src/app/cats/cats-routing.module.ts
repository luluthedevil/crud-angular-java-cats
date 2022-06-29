import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatFormComponent } from './cat-form/cat-form.component';

import { CatsComponent } from './cats/cats.component';

const routes: Routes = [
  { path: '', component: CatsComponent },
  { path: 'new', component: CatFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatsRoutingModule { }
