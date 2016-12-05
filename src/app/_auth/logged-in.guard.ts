// logged-in.guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private auth: AuthenticationService) {}

  canActivate() {
    return this.auth.isAuthenticated();
  }
}
