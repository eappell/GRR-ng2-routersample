import { Component, OnInit } from '@angular/core';
import { Project } from '../projects/shared/project.model';
import { ProjectsService } from '../projects/shared/projects.service';
import { MasonryOptions } from 'angular2-masonry';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
  providers: [ProjectsService]
})
export class ProjectsComponent implements OnInit {
  public title: string = 'Project Listing';
  public projects: Project[];
  public errorMessage: string;
  public masonryOptions: MasonryOptions = {
    transitionDuration: '0.8s',
    gutter: 35
  };

  constructor(private projectsService: ProjectsService) { }

  getProjects(): void {
    if (!this.projects) {
      this.projectsService.getProjects().subscribe(
        projects => this.projects = projects,
        error => this.errorMessage = <any>error
      );
    }
  }

  ngOnInit() {
    this.getProjects();
  }
}
