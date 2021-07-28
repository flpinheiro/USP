import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleRepHistorySearchCriteriaComponent } from './sale-rep-history-search-criteria.component';

describe('SaleRepHistorySearchCriteriaComponent', () => {
  let component: SaleRepHistorySearchCriteriaComponent;
  let fixture: ComponentFixture<SaleRepHistorySearchCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleRepHistorySearchCriteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleRepHistorySearchCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
