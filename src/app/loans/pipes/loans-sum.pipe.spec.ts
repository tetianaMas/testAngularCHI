import { LoansSumPipe } from './loans-sum.pipe';

describe('LoansSumPipe', () => {
  it('create an instance', () => {
    const pipe = new LoansSumPipe();
    expect(pipe).toBeTruthy();
  });
});
