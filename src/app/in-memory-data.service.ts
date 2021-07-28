import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable, of } from 'rxjs';
import { OrderHistory } from './entities/order-history';
import { QuoteHistory } from './entities/quote-history';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {


  createDb(): {} | Observable<{}> | Promise<{}> {
    const order: OrderHistory[] =
      [
        {
          OrderDate: "Jul-26-2021",
          RepID: 9999,
          DPID: 2001531426621,
          OrderNumber: "",
          Status: "",
          StatusDate: "N/A",
          PB: "Dell Latitude",
          CustomerNumber: 124201,
          CustomerName: "DELL COMPUTADORES DO BRASIL LTDA",
          LOB: "Laptops",
          Revenue: 4002308.52,
          Margin: 3630163.95,
          Qty: 1,
          PaymentType: "PD",
          PONumber: "",
          ShipDate: "N/A",
          TaskCode: "",
          CompanyNumber: "04",
          PaymentCode: "P"
        },
        {
          OrderDate: "Jul-26-2021",
          RepID: 9999,
          DPID: 2001531426621,
          OrderNumber: "",
          Status: "",
          StatusDate: "N/A",
          PB: "Dell Latitude",
          CustomerNumber: 124201,
          CustomerName: "DELL COMPUTADORES DO BRASIL LTDA",
          LOB: "Laptops",
          Revenue: 4002308.52,
          Margin: 3630163.95,
          Qty: 1,
          PaymentType: "PD",
          PONumber: "",
          ShipDate: "N/A",
          TaskCode: "",
          CompanyNumber: "04",
          PaymentCode: "P"
        },
        {
          OrderDate: "Jul-26-2021",
          RepID: 9999,
          DPID: 2001531426621,
          OrderNumber: "",
          Status: "",
          StatusDate: "N/A",
          PB: "Dell Latitude",
          CustomerNumber: 124201,
          CustomerName: "DELL COMPUTADORES DO BRASIL LTDA",
          LOB: "Laptops",
          Revenue: 4002308.52,
          Margin: 3630163.95,
          Qty: 1,
          PaymentType: "PD",
          PONumber: "",
          ShipDate: "N/A",
          TaskCode: "",
          CompanyNumber: "04",
          PaymentCode: "P"
        }
      ];
    const quote: QuoteHistory[] = [
      {
        QuoteDate: "Jul-27-2021",
        RepID: 9999,
        QuoteNumer: "1009421302902/1",
        CustomerNumber: 100112407,
        CustomerName: "STOLA DO BRASIL LTDA",
        LOB: "Desktops",
        Revenue: 3739,
        Margin: 1323.26,
        Qty: 1,
        QuoteStatus: "QUOTED",
        CompanyNumber: "04"
      },
      {
        QuoteDate: "Jul-27-2021",
        RepID: 9999,
        QuoteNumer: "1009421302902/1",
        CustomerNumber: 100112407,
        CustomerName: "STOLA DO BRASIL LTDA",
        LOB: "Desktops",
        Revenue: 3739,
        Margin: 1323.26,
        Qty: 1,
        QuoteStatus: "QUOTED",
        CompanyNumber: "04"
      },
      {
        QuoteDate: "Jul-27-2021",
        RepID: 9999,
        QuoteNumer: "1009421302902/1",
        CustomerNumber: 100112407,
        CustomerName: "STOLA DO BRASIL LTDA",
        LOB: "Desktops",
        Revenue: 3739,
        Margin: 1323.26,
        Qty: 1,
        QuoteStatus: "QUOTED",
        CompanyNumber: "04"
      }

    ];
    const ret = { order, quote };
    return of(ret);
  }
}
