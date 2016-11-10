import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'project/:id', component: ProjectComponent },
      { path: 'projects', component: ProjectsComponent }
    ])
  ],
  exports: [ RouterModule ]
})

export class ProjectsRoutingModule {}
