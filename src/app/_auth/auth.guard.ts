import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, CanActivate } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AuthenticationService } from '../_auth/authentication.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

@Injectable()
export class AuthGuard implements CanActivate {
  route: ActivatedRoute;
  toUrl: string;

  constructor(
      private router: Router,
      private modalService: NgbModal,
      private activeRoute: ActivatedRoute,
      private auth: AuthenticationService,
      public activeModal: NgbActiveModal) { }

  canActivate(route, state): Observable<boolean>|boolean {
    this.toUrl = state.url;
    if (!this.auth.isLoggedIn()) {
      // not logged in so redirect to login page
      localStorage.setItem('lastRoute', state.url);
      this.router.navigate(['/login', { redirect: this.toUrl }]);
      return false;
    }

    return true;
  }

/*
  isLoggedIn(): Observable<boolean>|boolean {
    if (this.auth.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
    if (localStorage.getItem('currentUser')) {
      let userToken = JSON.parse(localStorage.getItem('currentUser'));
      let expiresOn = moment(userToken.expires);
      // Confirm there is a token, and it's expiration is later than now
      return userToken.token !== '' && expiresOn > moment();
    }
    return false;
  }
*/

  openLogin(): void {
    this.modalService.open(LoginComponent, { size: 'sm' });
  }
}
