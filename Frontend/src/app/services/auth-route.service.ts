import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthRouteService {

  private loggedIn = new BehaviorSubject<boolean>(this.token.isValid());
  
  authStatus = this.loggedIn.asObservable();

  changeAuthStatus(value: boolean){
    this.loggedIn.next(value);
  }

  constructor(
    private token: TokenService
  ) {}
}
