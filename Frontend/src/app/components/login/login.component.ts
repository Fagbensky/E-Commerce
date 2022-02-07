import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { SnotifyService } from 'ng-snotify';
import { AuthRouteService } from 'src/app/services/login/auth-route.service';
import { AuthService } from 'src/app/services/login/auth.service';
import { TokenService } from 'src/app/services/login/token.service';
import { Login, LoginResponse } from './loginInterface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  cancel = faTimes

  loginForm!: FormGroup;
  
  // login = new Login();

  @Output() disLogin = new EventEmitter();
  @Output() onSignup = new EventEmitter<MouseEvent>();
  @Output() request = new EventEmitter();

  constructor(
    private auth: AuthService, 
    private token: TokenService,
    private router: Router,
    private authRoute: AuthRouteService,
    private notify: SnotifyService,
    private fb: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    this.auth
    .login(this.loginForm.value)
    .subscribe(
      (data) => this.handleResponse(data),
      (error) => this.handleError(error)
    )
  }

  handleResponse(data: LoginResponse) {
    this.token.handleToken(data.access_token);
    this.authRoute.changeAuthStatus(true);
    this.removeLogin();
    this.notify.success(`Welcome ${data.user}`, { timeout: 1500 });
  }

  handleError(error: any){
    this.notify.error(error.error.error);
  }

  removeLogin() {
    this.disLogin.emit();
  }

  addSubmit(event: MouseEvent) {
    event.preventDefault();
    this.onSignup.emit(event);
  }

  addRequest(event: MouseEvent) {
    event.preventDefault();
    this.request.emit();
  }
}