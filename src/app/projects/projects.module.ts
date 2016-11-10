import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project/project.component';
import { ProjectAddComponent } from './add/project-add.component';
import { ProjectUpdateComponent } from './update/project-update.component';
import { ProjectsService } from './shared/projects.service';
import { ProjectCardComponent } from './shared/project-card.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { AnimalsModule } from '../animals/animals.module';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProjectsRoutingModule,
    AnimalsModule
  ],
  declarations: [
    ProjectsComponent,
    ProjectComponent,
    ProjectCardComponent,
    ProjectsComponent,
    ProjectAddComponent,
    ProjectUpdateComponent
  ],
  exports: [
    ProjectCardComponent
  ],
  providers: [ ProjectsService ]
})
export class ProjectsModule { }
