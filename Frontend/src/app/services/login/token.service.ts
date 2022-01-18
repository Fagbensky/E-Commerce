import { Injectable } from '@angular/core';
import { loginPayload } from './payloadInterface';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss ={
    login : 'http://localhost:8000/api/login',
    signup: 'http://localhost:8000/api/signup'
  }
  constructor() { }

  handleToken(token: string) {
    this.set(token);
  }

  set(token: string) {
    localStorage.setItem('token', token)
  }

  get(): string | null {
    return localStorage.getItem('token');
  }

  remove(): void {
    localStorage.removeItem('token');
  }

  isValid():boolean {
    const token = this.get();
    if (this.get()) {
      const payload = this.payload(token);
      if(payload){
        return Object.values(this.iss).indexOf(payload.iss) > -1? true : false;
      }
    }else{
      return false;
    }
    return false;
  }

  payload(token: string | null): loginPayload | void {
    if (token) {
      const payload = token.split('.')[1];
      return this.decode(payload);
    }
  }

  decode(payload: string): loginPayload{
    return JSON.parse(atob(payload));
  }
  
}

