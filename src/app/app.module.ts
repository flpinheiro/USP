import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaleRepHistoryComponent } from './Components/sale-rep-history/sale-rep-history.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { SaleRepHistoryRoutingModule } from './sale-rep-history-routing.module';
import { OrderHistoryComponent } from './Components/order-history/order-history.component';
import { QuoteHistoryComponent } from './Components/quote-history/quote-history.component';
import { MessageHistoryComponent } from './Components/message-history/message-history.component';
import { LegacyOrderHistoryComponent } from './Components/legacy-order-history/legacy-order-history.component';
import { SaleRepHistorySearchCriteriaComponent } from './Components/sale-rep-history-search-criteria/sale-rep-history-search-criteria.component';
import { SaleRepHistoryFilterCriteriaComponent } from './Components/sale-rep-history-filter-criteria/sale-rep-history-filter-criteria.component';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

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
    SaleRepHistoryRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
