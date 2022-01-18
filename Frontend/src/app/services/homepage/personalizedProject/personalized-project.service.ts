import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PersonProduct } from './personProductsInterface';

@Injectable({
  providedIn: 'root'
})
export class PersonalizedProjectService {

  private productUrl: string = 'assets/api/homepages/personalizedProducts.json';

  constructor(private http: HttpClient) { }

  personProducts$ = this.http.get<PersonProduct[]>(this.productUrl)
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
