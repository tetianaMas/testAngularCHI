export interface ILoan {
  id: string;
  title: string;
  tranche: string;
  available: string;
  annualised_return: number;
  term_remaining: number;
  ltv: number;
  amount: string;
}

export class Loan {
  public id: string;

  public title: string;

  public tranche: string;

  public available: number;

  public annualisedReturn: number;

  public termRemaining: number;

  public ltv: number;

  public amount: number;

  public isInvested: boolean = false;

  constructor(data: ILoan) {
    this.id = data.id;
    this.title = data.title;
    this.tranche = data.tranche;
    this.available = Number(data.available.replace(',', ''));
    this.annualisedReturn = data.annualised_return;
    this.termRemaining = data.term_remaining;
    this.ltv = data.ltv;
    this.amount = Number(data.amount.replace(',', ''));
  }
}
