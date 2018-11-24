import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { RouterModule, Router, RouterEvent } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { SpinnyModule } from './shared/spinny/spinny.module';
import { AuthService } from './service/auth.service';
import { SpinnyService } from './shared/spinny/spinny.service';
import { SecureHttp } from './shared/secure-http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { UserService } from './service/user.service';
import { AuthGuard } from './shared/guards';
import { SignUpModule } from './signup/signup.module';
import { ToastComponent } from './shared/toast/toast.component';
import { SearchService } from './service/search.service';
import { ModulesModule } from './modules/modules.module';
import { ContactBookComponent } from './src/app/modules/contacts/contact-book/contact-book.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactBookComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule,
    ModulesModule,
    HttpModule,
    LoginModule,
    SignUpModule,
    SpinnyModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-center',
      preventDuplicates: true
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    AuthService,
    SecureHttp,
    AuthGuard,
    UserService,
    ToastrService,
    SpinnyService,
    SearchService
  ],
  bootstrap: [AppComponent],
  entryComponents:[ToastComponent]
})
export class AppModule { 

}
