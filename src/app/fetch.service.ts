import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AddressBookKafka } from './address-book-kafka';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http:HttpClient) { }

  readonly URL: string = environment.COSUMER_API_URL;

  readonly temp:AddressBookKafka[] = [{id:1, name:'A', phone:'P', zipCode:'Z', address:'A', generator:'G', consumer:'C'}]

  fetchFromConsumer() : Observable<AddressBookKafka[]> {
    console.log("Consumer URL: " + this.URL);
    return this.http.get<AddressBookKafka[]>(this.URL);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.messageService.add(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
