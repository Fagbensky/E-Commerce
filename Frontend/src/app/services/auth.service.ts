import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Login } from '../components/login/loginInterface';
import { Signup } from '../components/signup/signupInterface';
import { TokenService } from './token.service';
 


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:8000/api'

  constructor(
      private http: HttpClient,
      private token: TokenService
    ) { }

  login(login: Login): Observable<any>{
    const url = `${this.url}/login`;

    return this.http.post(url, login, httpOptions)
    .pipe(
      //catchError(this.handleError)
    )
  }

  signup(signup: Signup): Observable<any>{
    const url = `${this.url}/signup`;

    return this.http.post(url, signup, httpOptions)
    .pipe(
      //catchError(this.handleError)
    )
  }

  logout(){
    const url = `${this.url}/logout`;
    const logOutHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token.get()}`
      })
    }
    this.http.post(url, {} ,logOutHeader)
    .subscribe()
  }

  // Method that handles error
  private handleError(err: HttpErrorResponse): Observable<never> {
    // In a real world app, We may send the server to some remote logging infrastructure instead of just logging it to the console.

    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {

      // An client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;

    } else {

      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

    }

    console.error(errorMessage);
    return throwError(errorMessage)
  }
}
