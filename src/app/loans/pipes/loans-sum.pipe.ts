import { Pipe, PipeTransform } from '@angular/core';
import { Loan } from 'src/app/shared/models/loan.model';

@Pipe({
  name: 'loansSum',
})
export class LoansSumPipe implements PipeTransform {
  transform(loans: Loan[]): number {
    return loans ? loans.reduce((acc, curr) => (acc += curr.available), 0) : 0;
  }
}
