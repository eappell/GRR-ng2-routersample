import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-portal',
  templateUrl: './customer-portal.html',
  styles: ['./customer-portal.css']
})
export class CustomerPortalComponent implements OnInit {
  public title: string = 'Customer Portal';

  constructor() { }
  ngOnInit() {
  }
}
