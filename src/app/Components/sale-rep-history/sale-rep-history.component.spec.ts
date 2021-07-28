import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleRepHistoryComponent } from './sale-rep-history.component';

describe('SaleRepHistoryComponent', () => {
  let component: SaleRepHistoryComponent;
  let fixture: ComponentFixture<SaleRepHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleRepHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleRepHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
