import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { LOANS } from 'src/app/shared/mocks/loans';
import { Loan } from 'src/app/shared/models/loan.model';

@Injectable()
export class LoanService {
  private loans: Loan[] = [];

  public loans$ = new ReplaySubject<Loan[]>(1);

  public loadLoans(): void {
    this.loans = LOANS.map((loan) => new Loan(loan));
    this.loans$.next(this.loans);
  }

  public updateLoan(id: string, value: number): void {
    let currLoan = this.loans.find((loan) => loan.id === id);
    if (!currLoan) {
      return;
    }

    currLoan.available -= value;
    currLoan.amount += value;
    currLoan.isInvested = true;

    this.loans$.next(this.loans);
  }
}
