import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidaysComponent } from './holidays.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowseHolidayComponent } from './browse-holiday/browse-holiday.component';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';

const routes: Routes =[
  { path: '', component: HolidaysComponent },
  { path: 'browse/:id', component: BrowseHolidayComponent },
];

@NgModule({
  declarations: [HolidaysComponent, BrowseHolidayComponent],
  imports: [
    CommonModule,
    FormsModule,
    NouisliderModule,
    RouterModule.forChild(routes),
  ]
})
export class HolidaysModule { }
