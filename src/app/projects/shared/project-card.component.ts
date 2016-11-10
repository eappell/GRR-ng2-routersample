import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../shared/project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;

  constructor(private router: Router) { }

  gotoDetail(project: Project): void {
    let link = ['/project', project.Id];
    this.router.navigate(link);
  }

  ngOnInit() {
  }

}
