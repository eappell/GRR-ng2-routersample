import { Component, OnInit } from '@angular/core';
import { Project } from '../projects/project';
import { ProjectsService } from '../projects/projects.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.html',
  styles: ['./projects-list.html'],
  providers: [ProjectsService]
})
export class ProjectsListComponent implements OnInit {
  public title: string = 'Project Listing';
  public projects: Project[];

  constructor(private projectsService: ProjectsService) { }

  getProjects(): void {
    if (!this.projects) {
      this.projectsService.getProjectsPromise().then(response => this.projects = response);
    }
  }

  ngOnInit() {
    this.getProjects();
  }
}
