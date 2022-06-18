import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { LoansListComponent } from './components/loans-list/loans-list.component';
import { LoansItemComponent } from './components/loans-list/loans-item/loans-item.component';
import { LoansPageComponent } from './pages/loans-page/loans-page.component';
import { LoansSumPipe } from './pipes/loans-sum.pipe';

@NgModule({
  declarations: [
    LoansListComponent,
    LoansItemComponent,
    LoansPageComponent,
    LoansSumPipe,
  ],
  exports: [LoansPageComponent],
  imports: [CommonModule, SharedModule],
})
export class LoansModule {}
