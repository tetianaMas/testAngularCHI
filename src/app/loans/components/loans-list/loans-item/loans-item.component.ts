import { Component, Input } from '@angular/core';
import { Loan } from 'src/app/shared/models/loan.model';

@Component({
  selector: 'app-loans-item',
  templateUrl: './loans-item.component.html',
  styleUrls: ['./loans-item.component.scss'],
})
export class LoansItemComponent {
  @Input() public loan: Loan | null = null;
}
