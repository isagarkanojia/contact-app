import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { DomSanitizer, SafeResourceUrl, } from '@angular/platform-browser';
import { LoginRequest } from '../model/login-request.model';
import { StorageUtil } from '../util/storage.util';
import { AuthService } from '../service/auth.service';
import { SpinnyService } from '../shared/spinny/spinny.service';
import { Exception, ExceptionRegistry } from '../constants/exception-registry.constant';
import { ToastComponent } from '../shared/toast/toast.component';
import { ToastrService } from 'ngx-toastr';
import { SignUpModel } from '../model/signup.model';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.less']
})
export class SignUpComponent implements OnInit {

    signup = {
      name: '',
      username: '',
      email: '',
      password: '',
      mobileNumber: '',
      soilHealthCardId: '',
      adharCardNo: ''
    };
    showErrorMessage = false;

    // public _authStatus: AuthStatus;
    public _authenticatedUserSubs: Subscription;
    public alerts: any = [];

    constructor(private _router: Router,
        private _toastr: ToastrService,
        private spinnyService: SpinnyService,
        private _authService: AuthService
    ) {
    }

    ngOnInit() {

    }

    onSignUpFormSubmit(form: any): void {

      const adhar_regex = new RegExp('^\d{4}\s\d{4}\s\d{4}$');
      if (form && !form.valid) {
          this._toastr.show('Please fill in all details', 'Error!', {
              toastComponent: ToastComponent,
              toastClass: 'error-toast-class',
              disableTimeOut: true,
              positionClass: 'toast-top-center'
          });
          return;
      } else if (!adhar_regex.test(this.signup.adharCardNo)) {
        this._toastr.show('Please fill in adhar detail correct', 'Error!', {
          toastComponent: ToastComponent,
          toastClass: 'error-toast-class',
          disableTimeOut: true,
          positionClass: 'toast-top-center'
      });
      return;
      }
      //New login request
      const signupRequest = new SignUpModel (
        this.signup.name,
        this.signup.username,
        this.signup.email,
        this.signup.password,
        this.signup.mobileNumber,
        this.signup.soilHealthCardId,
        this.signup.adharCardNo
      );
      this._authService.signup(signupRequest);
  }


}
