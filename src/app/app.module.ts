import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaleRepHistoryComponent } from './sale-rep-history/sale-rep-history.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { SaleRepHistoryRoutingModule } from './sale-rep-history-routing.module';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { QuoteHistoryComponent } from './quote-history/quote-history.component';
import { MessageHistoryComponent } from './message-history/message-history.component';
import { LegacyOrderHistoryComponent } from './legacy-order-history/legacy-order-history.component';
import { SaleRepHistorySearchCriteriaComponent } from './sale-rep-history-search-criteria/sale-rep-history-search-criteria.component';
import { SaleRepHistoryFilterCriteriaComponent } from './sale-rep-history-filter-criteria/sale-rep-history-filter-criteria.component';


@NgModule({
  declarations: [
    AppComponent,
    SaleRepHistoryComponent,
    OrderHistoryComponent,
    QuoteHistoryComponent,
    MessageHistoryComponent,
    LegacyOrderHistoryComponent,
    SaleRepHistorySearchCriteriaComponent,
    SaleRepHistoryFilterCriteriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SaleRepHistoryRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
