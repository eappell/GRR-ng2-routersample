import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from './_auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  IsAuthenticated: boolean;
  loginModal: LoginComponent;

  constructor (
    private modalService: NgbModal,
    private authService: AuthenticationService
  ) { }

  openLogin(): void {
    this.modalService.open(LoginComponent, { size: 'sm' });
  }

  logout(): void {
    this.authService.logout();
    this.IsAuthenticated = false;
  }

  ngOnInit() {
    this.IsAuthenticated = this.authService.isAuthenticated();
  }
}
