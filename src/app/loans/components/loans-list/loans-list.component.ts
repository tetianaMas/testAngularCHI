import { Component, Input } from '@angular/core';
import { TLoan } from 'src/app/shared/models/loan.model';

@Component({
  selector: 'app-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.scss'],
})
export class LoansListComponent {
  @Input() public loans: TLoan[] = [];
}
