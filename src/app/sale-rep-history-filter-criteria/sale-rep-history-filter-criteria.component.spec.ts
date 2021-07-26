import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleRepHistoryFilterCriteriaComponent } from './sale-rep-history-filter-criteria.component';

describe('SaleRepHistoryFilterCriteriaComponent', () => {
  let component: SaleRepHistoryFilterCriteriaComponent;
  let fixture: ComponentFixture<SaleRepHistoryFilterCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleRepHistoryFilterCriteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleRepHistoryFilterCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
