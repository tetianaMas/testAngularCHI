import { Component } from '@angular/core';
import { LOANS } from 'src/app/shared/mocks/loans';
import { TLoan } from 'src/app/shared/models/loan.model';

@Component({
  selector: 'app-loans-page',
  templateUrl: './loans-page.component.html',
  styleUrls: ['./loans-page.component.scss'],
})
export class LoansPageComponent {
  public readonly loans: TLoan[] = LOANS;
}
