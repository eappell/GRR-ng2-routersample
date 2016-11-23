import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_auth/authentication.service';
import { AlertService } from '../alert/alert.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    @Input() returnRoute: string;
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        // private routerLink: RouterLink,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
      // reset login status
      debugger
      this.authenticationService.logout();
    }

    login() {
      this.loading = true;
      this.authenticationService.login(this.model.username, this.model.password)
          .subscribe(
              data => {
                if (this.returnRoute && this.returnRoute !== '') {
                  this.router.navigate([this.returnRoute]);
                } else {
                  this.router.navigate(['/']);
                }

                console.log(data);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
    }
}
