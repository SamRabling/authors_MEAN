import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { NewAuthorFormComponent } from './new-author-form/new-author-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent},
  { path: 'authors/new', component: NewAuthorFormComponent },
  { path: 'authors/edit', component: EditComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
