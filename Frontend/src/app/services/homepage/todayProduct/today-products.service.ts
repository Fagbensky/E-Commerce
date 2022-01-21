import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TodayProduct } from './todayProductsInterface';

@Injectable({
  providedIn: 'root'
})
export class TodayProductsService {

  private todaysUrl: string = 'assets/api/homepages/todayProducts.json';

  constructor(private http:HttpClient) { }

  todaysProduct$ = this.http.get<TodayProduct[]>(this.todaysUrl)
    .pipe(
      catchError(this.handleError)
    )

  private handleError(err: HttpErrorResponse) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.message}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
