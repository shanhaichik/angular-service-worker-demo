import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './modules/main/main.component';

import { RecordsListComponent } from './modules/records-list/records-list.component';
import { RecordFormComponent } from './modules/record-form/record-form.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'records',
    component: RecordsListComponent,
    children: [
      {
        path: ':id/edit',
        component: RecordFormComponent
      }
    ]
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
