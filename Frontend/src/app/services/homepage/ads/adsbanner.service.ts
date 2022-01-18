import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { AdsBanner } from './adsbannerInterface';

@Injectable({
  providedIn: 'root'
})
export class AdsbannerService {

  private adsURL = 'assets/api/homepages/adsBanner.json';

  constructor(private http: HttpClient) { }

  adsBanner$ = this.http.get<AdsBanner[]>(this.adsURL)
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