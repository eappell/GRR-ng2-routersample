import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../_auth/authentication.service';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    @Input() returnRoute: string;
    model: any = {};
    loading = false;
    redirect: string;

    constructor(
        private router: Router,
        // private routerLink: RouterLink,
        private authenticationService: AuthenticationService,
        private route: ActivatedRoute,
        public activeModal: NgbActiveModal) { }

    ngOnInit() {
      // reset login status
      // this.redirect = localStorage.getItem('lastRoute');
      this.redirect = this.route.snapshot.params['redirect'];
      this.authenticationService.logout();
    }

    login() {
      this.loading = true;
      this.authenticationService
          .login(this.model.username, this.model.password)
          .subscribe(
            () => { this.loginSuccess(); },
            error => { this.loginFail(error); }
          );
    }

    loginSuccess(): void {
      if (this.redirect) {
        this.activeModal.dismiss();
        this.router.navigateByUrl(this.redirect);
      } else {
        this.activeModal.dismiss();
        // this.router.navigate(['/']);
      }
    }

    loginFail(error): void {
      this.activeModal.dismiss();
      this.loading = false;
    }
}
