import { Component, OnInit } from '@angular/core';
import { QuoteHistory } from 'src/app/entities/quote-history';
import { QuoteHistoryService } from 'src/app/services/quote-history.service';

@Component({
  selector: 'app-quote-history',
  templateUrl: './quote-history.component.html',
  styleUrls: ['./quote-history.component.css']
})
export class QuoteHistoryComponent implements OnInit {
  quoteHistory: QuoteHistory[]|undefined;
  constructor(private quoteHistoryService: QuoteHistoryService) { }

  ngOnInit(): void {
    this.getQuoteHistory();
  }
  getQuoteHistory(): void {
    this.quoteHistoryService.getQuoteHistory().subscribe(order => this.quoteHistory = order);
  }

}
