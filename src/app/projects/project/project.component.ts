import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MasonryOptions } from 'angular2-masonry';

import { Project } from '../shared/project.model';
import { ProjectsService } from '../shared/projects.service';
import { AnimalService } from '../../animals/shared/animals.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.html',
  styleUrls: ['./project.css'],
  providers: [ Project, ProjectsService, AnimalService ]
})

export class ProjectComponent implements OnInit {
  public title: string = 'Project Detail';
  public errorMessage: string;

  @Input() project: Project;

  public masonryOptions: MasonryOptions = {
    transitionDuration: '0.8s',
    columnWidth: 180,
    gutter: 5
  };

  constructor(
    private _projectService: ProjectsService,
    private _animalService: AnimalService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this._projectService.getProject(id)
        .subscribe (
          project => this.project = project,
          error => this.errorMessage = <any>error
        );
    });
  }
}
