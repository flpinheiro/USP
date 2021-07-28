import { Component, OnInit } from '@angular/core';
import { OrderHistory } from 'src/app/entities/order-history';
import { OrderHistoryService } from 'src/app/services/order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orderHistory: OrderHistory[] | undefined;
  constructor(private orderHistoryService: OrderHistoryService) { }

  ngOnInit(): void {
    this.getOrderHistory();
  }
  getOrderHistory(): void {
    this.orderHistoryService
      .getOrderHistory()
      .subscribe(order => this.orderHistory = order);
  }

}
