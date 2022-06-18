import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoansSumPipe } from '../../pipes/loans-sum.pipe';
import { LoanService } from '../../services/loan.service';

import { LoansPageComponent } from './loans-page.component';

describe('LoansPageComponent', () => {
  let component: LoansPageComponent;
  let fixture: ComponentFixture<LoansPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoansPageComponent, LoansSumPipe],
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
