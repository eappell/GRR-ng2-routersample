import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-detail-info',
  templateUrl: './animal-detail.html',
  styleUrls: ['./animal-detail.css']
})
export class AnimalDetailInfoComponent implements OnInit {
  public title: string = 'Animal Details';

  constructor() { }
  ngOnInit() {
  }
}
