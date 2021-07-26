import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-sale-rep-history-filter-criteria',
  templateUrl: './sale-rep-history-filter-criteria.component.html',
  styleUrls: ['./sale-rep-history-filter-criteria.component.css']
})
export class SaleRepHistoryFilterCriteriaComponent implements OnInit {
  @Input() LOB: boolean = false;
  @Input() RepType: Boolean = false;
  @Input() PaymentType: Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
