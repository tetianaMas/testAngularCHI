import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansItemComponent } from './loans-item.component';

describe('LoansItemComponent', () => {
  let component: LoansItemComponent;
  let fixture: ComponentFixture<LoansItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoansItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
