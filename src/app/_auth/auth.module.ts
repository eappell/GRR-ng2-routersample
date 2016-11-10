import { NgModule } from '@angular/core';

import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { User } from './user';
import { AuthGuard } from './auth.guard';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AlertComponent } from '../alert/alert.component';

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
    UserService
  ]
})

export class AuthModule {}
