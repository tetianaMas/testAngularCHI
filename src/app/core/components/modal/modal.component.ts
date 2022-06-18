import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LoanService } from 'src/app/loans/services/loan.service';
import { ModalService } from '../../services/modal.service';

const TITLE_DEFAULT = 'Invest in Loan';
const FORM_TITLE = 'Investment amount';
export type TModalData = {
  id: string;
  title: string;
  amount: number;
  loanEnds: number;
  isOpen: boolean;
};

export const MODAL_DATA_DEF = {
  id: '',
  title: '',
  amount: 0,
  loanEnds: 0,
  isOpen: false,
};

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  public readonly title: string = TITLE_DEFAULT;

  public data: TModalData = MODAL_DATA_DEF;

  private inputValue: number = 0;

  public readonly formTitle: string = FORM_TITLE;

  public isShowed: boolean = this.data.isOpen;

  public set value(val: number) {
    if (val > this.data.amount) {
      return;
    }
    this.inputValue = val;
  }

  public get value(): number {
    return this.inputValue;
  }

  private subject = new Subject<void>();

  constructor(
    private modalService: ModalService,
    private loanService: LoanService
  ) {}

  public ngOnInit(): void {
    this.modalService.modalState
      .pipe(takeUntil(this.subject))
      .subscribe((val) => {
        this.data = val;
      });
  }

  public onClickInvest(id: string, value: number) {
    this.loanService.updateLoan(id, value);
    this.value = 0;
    this.modalService.closeModal();
  }

  public onCloseBtn(): void {
    this.modalService.closeModal();
  }

  public ngOnDestroy(): void {
    this.subject.complete();
  }
}
