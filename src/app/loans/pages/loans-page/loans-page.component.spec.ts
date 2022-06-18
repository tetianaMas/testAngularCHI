import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { TimeFormatterPipe } from 'src/app/shared/pipes/time-formatter.pipe';
import { LoansItemComponent } from '../../components/loans-list/loans-item/loans-item.component';
import { LoansListComponent } from '../../components/loans-list/loans-list.component';
import { LoansSumPipe } from '../../pipes/loans-sum.pipe';
import { LoanService } from '../../services/loan.service';

import { LoansPageComponent } from './loans-page.component';

describe('LoansPageComponent', () => {
  let component: LoansPageComponent;
  let fixture: ComponentFixture<LoansPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LoansPageComponent,
        LoansSumPipe,
        LoansListComponent,
        LoansItemComponent,
        ButtonComponent,
        TimeFormatterPipe,
      ],
      providers: [LoanService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
