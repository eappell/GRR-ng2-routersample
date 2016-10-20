import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-list',
  templateUrl: './available-list.html',
  styles: ['./available-list.css']
})
export class AvailableListComponent implements OnInit {
  public title: string = 'Available Listing';

  constructor() { }
  ngOnInit() {  }
}
