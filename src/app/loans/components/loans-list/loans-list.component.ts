import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';
import { Loan } from 'src/app/shared/models/loan.model';

@Component({
  selector: 'app-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.scss'],
})
export class LoansListComponent implements OnInit {
  @Input() public loans: Loan[] | null = [];

  @Input() public totalAmount: number = 0;

  constructor(private modalService: ModalService) {}

  public ngOnInit(): void {
    this.totalAmount = this.getTotalAmount();
  }

  private getTotalAmount(): number {
    return this.loans
      ? this.loans.reduce((acc, curr) => (acc += curr.available), 0)
      : 0;
  }

  public onLoanClick(loan: Loan): void {
    this.modalService.openModal(loan);
  }
}
