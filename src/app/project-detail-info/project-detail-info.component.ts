import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-detail-info',
  templateUrl: './project-detail.html',
  styles: ['./project-detail.css']
})
export class ProjectDetailInfoComponent implements OnInit {
  public title: string = 'Project Detail';

  constructor() { }
  ngOnInit() {
  }
}
