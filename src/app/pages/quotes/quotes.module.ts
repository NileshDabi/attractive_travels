import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesComponent } from './quotes.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { AdminGuard } from '../../@core/admin.guard';

const routes: Routes =[
  { path: '', component: QuotesComponent },
  { path: 'view/:id', component: QuoteDetailsComponent, canActivate: [AdminGuard] },
];

@NgModule({
  declarations: [QuotesComponent, QuoteDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    Ng2SmartTableModule,
  ]
})
export class QuotesModule { }
