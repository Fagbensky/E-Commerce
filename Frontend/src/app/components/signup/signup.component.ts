import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { SnotifyService } from 'ng-snotify';
import { AuthRouteService } from 'src/app/services/login/auth-route.service';
import { AuthService } from 'src/app/services/login/auth.service';
import { TokenService } from 'src/app/services/login/token.service';
import { LoginResponse } from '../login/loginInterface';
import { Signup } from './signupInterface';

function passwordMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const passwordControl:any = c.get('password');
  const passConfirmControl:any = c.get('password_confirmation');

  if (passwordControl.pristine || passConfirmControl.pristine) {
    return null;
  }

  if (passwordControl.value === passConfirmControl.value) {
    return null;
  }
  return { match: true };
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  cancel = faTimes

  signup = new Signup();
  
  signupForm !: FormGroup;

  @Output() disSignup = new EventEmitter();
  @Output() login = new EventEmitter<MouseEvent>();

  constructor(
    private auth: AuthService,
    private token: TokenService,
    private router: Router,
    private authRoute: AuthRouteService,
    private notify: SnotifyService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        password_confirmation: ['', [Validators.required]],
      }, {validator: passwordMatcher}),
    })
  }


  onSubmit() {

    let data: Signup = {
      firstName: this.signupForm.value.firstName,
      lastName: this.signupForm.value.lastName,
      email: this.signupForm.value.email,
      password: this.signupForm.value.passwordGroup.password,
      password_confirmation: this.signupForm.value.passwordGroup.password_confirmation,
    }

    this.auth
      .signup(data)
      .subscribe(
        (data) => this.handleResponse(data),
        (error) => this.handleError(error)
    )
  }

  handleResponse(data: LoginResponse){
    this.token.handleToken(data.access_token);
    this.authRoute.changeAuthStatus(true);
    this.removeSignup();
    this.notify.success(`Welcome ${data.user}`, { timeout: 1500 });
  }

  handleError(error: any) {
    console.log(error);
    let errors = error.error.errors.error;
    let email = error.error.errors.email;
    let password = error.error.errors.password;
    let message = error.error.message;
    if (errors) {
      this.notify.error(errors[0], { timeout: 2000 });
    }
    if (email) {
      this.notify.error(email[0], { timeout: 2000 });
    }
    if (password) {
      this.notify.error(password[0], { timeout: 2000 });
    }
    if (message && !(email || password)) {
      this.notify.error(message, { timeout: 2000 });
    }
  }

  removeSignup() {
    this.disSignup.emit();
  }

  addLogin(event: MouseEvent) {
    event.preventDefault();
    this.login.emit(event);
  }

}