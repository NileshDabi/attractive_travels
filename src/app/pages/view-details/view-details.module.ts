import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDetailsComponent } from './view-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  { path: '', component: ViewDetailsComponent },
];

@NgModule({
  declarations: [ViewDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ViewDetailsModule { }
