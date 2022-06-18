import { TestBed } from '@angular/core/testing';
import { Loan } from 'src/app/shared/models/loan.model';

import { LoanService } from './loan.service';

describe('LoanService', () => {
  let service: LoanService;
  let values: Loan[] = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoanService],
    });
    service = TestBed.inject(LoanService);

    service.loadLoans();
    service.loans$.subscribe((val) => {
      values = val;
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('loadLoans', () => {
    it('should create Loan instances', () => {
      expect(values.every((elem) => elem instanceof Loan)).toBeTruthy();
    });
  });

  describe('updateLoan', () => {
    it('should update loan data', () => {
      const NUMBER_TO_UPADTE = 1000;
      const ID_TO_UPADTE = '1';
      const EXPECT_DATA_UPDATED: Loan = {
        isInvested: true,
        id: '1',
        title: 'Voluptate et sed tempora qui quisquam.',
        tranche: 'A',
        available: 10959,
        annualisedReturn: 8.6,
        termRemaining: 864000,
        ltv: 48.8,
        amount: 86754,
      };
      service.updateLoan(ID_TO_UPADTE, NUMBER_TO_UPADTE);
      const result = values.find((el) => el.id === ID_TO_UPADTE);

      expect({ ...result }).toEqual({ ...EXPECT_DATA_UPDATED });
    });
  });
});
