import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { AuthService } from 'src/app/services/auth.service';
import { resetPassword, resetPasswordSuccess } from './resetPasswordInterface';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.scss']
})
export class ResponseResetComponent implements OnInit {

  email?: string;
  password?: string;
  confirmPassword?: string;
  error: any = [];
  resetToken?: string;


  constructor(
    private activeRoute: ActivatedRoute,
    private auth: AuthService,
    private router: Router,
    private notify: SnotifyService
  ) { 
    this.activeRoute.queryParams.subscribe(params => {
      this.resetToken = params['token']
    });
    
   }

  ngOnInit(): void {
  }

  onSubmit(){
    const resetPassword: resetPassword = {
      email: this.email,
      password: this.password,
      password_confirmation: this.confirmPassword,
      resetToken: this.resetToken
    }
    this.auth.changePassword(resetPassword).subscribe(
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
            _router.navigateByUrl('/login'),
            this.notify.remove(toaster.id)
          }
        }
      ]
    })
  }

  handleError(error: any){
    this.error =error.error.errors;
  }

}
