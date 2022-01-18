import { Component, OnInit } from '@angular/core';
import { SnotifyService } from 'ng-snotify';
import { AuthService } from 'src/app/services/login/auth.service';
import { PasswordReset } from './resetPasswordInterface';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-password.component.html',
  styleUrls: ['./request-password.component.scss']
})
export class RequestResetComponent implements OnInit {

  email?: string| null;

  constructor(
    private auth: AuthService,
    private notify: SnotifyService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.notify.info('Wait...',{timeout:5000});
    const form: PasswordReset = {
      email: this.email
    };
    this.auth.sendPasswordReset(form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error),
    );
  };

  handleResponse(data: any){
    this.notify.success(data.data,{timeout:0})
    console.log(data);
    this.email = null;
  }

}
