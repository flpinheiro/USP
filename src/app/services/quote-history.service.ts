import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { QuoteHistory } from '../entities/quote-history';

@Injectable({
  providedIn: 'root'
})
export class QuoteHistoryService {

  private quoteUrl = 'api/quote';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }
  getQuoteHistory(): Observable<QuoteHistory[]> {
    return this.http.get<QuoteHistory[]>(this.quoteUrl)
    .pipe(catchError(this.handleError<QuoteHistory[]>('getQuoteHistory', [])));
  }
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
