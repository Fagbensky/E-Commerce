import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Login, LoginError } from './loginInterface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    email?: string;
    password?: string;

    public error?: string;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }


  onSubmit(){

    const login: Login ={
      email: this.email,
      password: this.password
    }

    console.log(login);
    
    this.auth
    .login(login)
    .subscribe(
      (data) => console.log(data),
      (error) => this.handleError(error)
    )
  }

  handleError(error: any){
    this.error = error.error.error;
  } 
}