import { Component, OnInit } from '@angular/core';
import { LoanService } from '../../services/loan.service';

@Component({
  selector: 'app-loans-page',
  templateUrl: './loans-page.component.html',
  styleUrls: ['./loans-page.component.scss'],
})
export class LoansPageComponent implements OnInit {
  constructor(public loansService: LoanService) {}

  ngOnInit(): void {
    this.loansService.loadLoans();
  }
}
