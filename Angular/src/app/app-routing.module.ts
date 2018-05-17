import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { NewAuthorFormComponent } from './new-author-form/new-author-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent},
  { path: '/new', component: NewAuthorFormComponent },
  { path: '/edit', component: EditComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
