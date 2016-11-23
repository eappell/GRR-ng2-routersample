import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  route: ActivatedRoute;

  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  canActivate() {
    if (localStorage.getItem('currentUser')) {
        // logged in so return true
        return true;
    }

    // not logged in so redirect to login page
    localStorage.setItem('lastRoute', this.router.url);
    this.router.navigate(['/login']);
    return false;
  }
}
