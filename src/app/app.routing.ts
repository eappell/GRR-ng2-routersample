import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalDetailInfoComponent } from './animal-detail-info/animal-detail-info.component';
import { ProjectDetailInfoComponent } from './project-detail-info/project-detail-info.component';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AvailableListComponent } from './available-list/available-list.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { CustomerPortalComponent } from './customer-portal/customer-portal.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'animal', component: AnimalDetailInfoComponent },
  { path: 'animals', component: AnimalsListComponent },
  { path: 'project', component: ProjectDetailInfoComponent },
  { path: 'projects', component: ProjectsListComponent },
  { path: 'available', component: AvailableListComponent },
  { path: 'customer', component: CustomerPortalComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
