import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { NgbModal, ModalDismissReasons, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from './_auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public IsAuthenticated: boolean;
  loginModal: LoginComponent;

  constructor (
    private modalService: NgbModal,
    private authService: AuthenticationService
  ) { }

  openLogin(): void {
    this.modalService.open(LoginComponent, { size: 'sm' }).result.then((result) => {
      console.log(result);
    }, (reason) => {
      this.getDismissReason(reason);
    });
  }

  logout(): void {
    if (confirm('Are you sure you want to log out?')) {
      this.authService.logout();
      this.IsAuthenticated = false;
    }
  }

  ngOnInit() {
    this.authService.isAuthenticated()
      .subscribe(loggedIn => this.IsAuthenticated = loggedIn);
  }

  private getDismissReason(reason: any): boolean {
    console.log(reason);
    // if (reason === ModalDismissReasons.ESC) {
    //   return 'by pressing ESC';
    // } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //   return 'by clicking on a backdrop';
    // } else {
    //   return  `with: ${reason}`;
    // }
    return true;
  }
}
