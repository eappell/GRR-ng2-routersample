import { NgModule } from '@angular/core';

import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AlertComponent } from '../alert/alert.component';
import { AlertService } from '../alert/alert.service';

@NgModule({
  imports: [ SharedModule ],
  declarations: [
    AlertComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    AlertService
  ],
  exports: [
    AlertComponent,
    LoginComponent,
    RegisterComponent
  ]
})

export class AuthModule {}
