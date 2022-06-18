import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Loan } from 'src/app/shared/models/loan.model';
import {
  MODAL_DATA_DEF,
  TModalData,
} from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public modalState: BehaviorSubject<TModalData> =
    new BehaviorSubject<TModalData>(MODAL_DATA_DEF);

  public openModal({
    id,
    title,
    available: amount,
    termRemaining: loanEnds,
  }: Loan): void {
    this.modalState.next({ id, title, amount, loanEnds, isOpen: true });
  }

  public closeModal(): void {
    this.modalState.next(MODAL_DATA_DEF);
  }
}
