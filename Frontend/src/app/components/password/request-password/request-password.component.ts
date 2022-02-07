import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { SnotifyService } from 'ng-snotify';
import { AuthService } from 'src/app/services/login/auth.service';
import { PasswordReset } from './resetPasswordInterface';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-password.component.html',
  styleUrls: ['./request-password.component.scss']
})
export class RequestResetComponent implements OnInit {

  cancel = faTimes

  resetForm!: FormGroup;

  email = new PasswordReset();
  
  @Output() disRequest = new EventEmitter();

  constructor(
    private auth: AuthService,
    private notify: SnotifyService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit(){
    this.notify.info('Wait...',{timeout:1500});
    this.auth.sendPasswordReset(this.resetForm.value).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error, { timeout: 1500}),
    );
  };

  handleResponse(data: any){
    this.notify.success(data.data,{timeout:1500})
    this.resetForm.patchValue({
      email: ''
    });
  }

  removeRequest() {
    this.disRequest.emit();
  }

}
