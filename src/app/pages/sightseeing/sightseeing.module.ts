import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SightseeingComponent } from '../sightseeing/sightseeing.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[
  { path: '', component: SightseeingComponent },
];

@NgModule({
  declarations: [SightseeingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class SightseeingModule { }
