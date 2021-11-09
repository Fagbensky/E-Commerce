import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRouteService } from 'src/app/services/auth-route.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { Login, LoginResponse } from './loginInterface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    email?: string;
    password?: string;

    public error?: string;

  constructor(
    private auth: AuthService, 
    private token: TokenService,
    private router: Router,
    private authRoute: AuthRouteService
    ) { }

  ngOnInit(): void {
  }


  onSubmit(){

    const login: Login ={
      email: this.email,
      password: this.password
    }
    
    this.auth
    .login(login)
    .subscribe(
      (data) => this.handleResponse(data),
      (error) => this.handleError(error)
    )
  }

  handleResponse(data: LoginResponse){
    this.token.handleToken(data.access_token);
    this.authRoute.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  handleError(error: { error: { error?: string}; }){
    this.error = error.error.error;
  } 
}