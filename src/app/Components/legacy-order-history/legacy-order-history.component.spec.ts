import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegacyOrderHistoryComponent } from './legacy-order-history.component';

describe('LegacyOrderHistoryComponent', () => {
  let component: LegacyOrderHistoryComponent;
  let fixture: ComponentFixture<LegacyOrderHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegacyOrderHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegacyOrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
