import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleRepHistoryComponent } from './Components/sale-rep-history/sale-rep-history.component';
import { OrderHistoryComponent } from './Components/order-history/order-history.component';
import { QuoteHistoryComponent } from './Components/quote-history/quote-history.component';
import { LegacyOrderHistoryComponent } from './Components/legacy-order-history/legacy-order-history.component';
import { MessageHistoryComponent } from './Components/message-history/message-history.component';

const routes: Routes = [
  { path: 'order-history', component: OrderHistoryComponent },
  { path: 'quote-history', component: QuoteHistoryComponent },
  {path: 'message-history', component: MessageHistoryComponent},
  {path:'legacy-order-history', component: LegacyOrderHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SaleRepHistoryRoutingModule { }
