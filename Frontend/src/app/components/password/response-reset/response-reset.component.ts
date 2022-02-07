import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { AuthService } from 'src/app/services/login/auth.service';
import { ResetPassword, resetPasswordSuccess } from './resetPasswordInterface';

function passwordMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const passwordControl: any = c.get('password');
  const passConfirmControl: any = c.get('password_confirmation');

  if (passwordControl.pristine || passConfirmControl.pristine) {
    return null;
  }

  if (passwordControl.value === passConfirmControl.value) {
    return null;
  }
  return { match: true };
}

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.scss']
})
export class ResponseResetComponent implements OnInit {


  resetToken?: string;

  resetPassForm!: FormGroup;
  
  resetPassword = new ResetPassword();

  constructor(
    private activeRoute: ActivatedRoute,
    private auth: AuthService,
    private router: Router,
    private notify: SnotifyService,
    private fb: FormBuilder,
  ) { 
    this.activeRoute.queryParams.subscribe(params => {
      this.resetToken = params['token']
    });
    
   }

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';

    this.resetPassForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        password_confirmation: ['', [Validators.required]],
      }, { validator: passwordMatcher }),
      resetToken: this.resetToken
    })
  }

  onSubmit() {
    
    let data: ResetPassword= {
      email: this.resetPassForm.value.email,
      password: this.resetPassForm.value.passwordGroup.password,
      password_confirmation: this.resetPassForm.value.passwordGroup.password_confirmation,
      resetToken: this.resetToken
    }
  
    this.auth.changePassword(data).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data: resetPasswordSuccess){
    let _router = this.router;
    this.notify.confirm('Done. Login with new password',{
      buttons: [
        {
          text: 'Okay', 
          action: toaster => {
            _router.navigateByUrl('/'),
            this.notify.remove(toaster.id)
          }
        }
      ]
    })
  }

  handleError(error: any){
    this.notify.error(error.error.errors);
  }

}
