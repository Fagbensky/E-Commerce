import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Login } from '../../components/login/loginInterface';
import { PasswordReset } from '../../components/password/request-password/resetPasswordInterface';
import { resetPassword } from '../../components/password/response-reset/resetPasswordInterface';
import { Signup } from '../../components/signup/signupInterface';
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

  sendPasswordReset(data: PasswordReset){
    const url = `${this.url}/sendPassWordResetLink`

    return this.http.post(url, data, httpOptions)
  }

  changePassword(data: resetPassword){
    const url = `${this.url}/resetPassword`

    return this.http.post(url, data, httpOptions)
  }
}
