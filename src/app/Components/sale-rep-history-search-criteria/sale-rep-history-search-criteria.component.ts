import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-sale-rep-history-search-criteria',
  templateUrl: './sale-rep-history-search-criteria.component.html',
  styleUrls: ['./sale-rep-history-search-criteria.component.css']
})
export class SaleRepHistorySearchCriteriaComponent implements OnInit {
  @Input() PONumber: boolean = false;
  @Input() OrderStatus: boolean = false;
  @Input() ExportToExcel: boolean = false;
  @Input() StatusType: boolean = false;
  constructor() {
  }

  ngOnInit(): void {
  }

}
