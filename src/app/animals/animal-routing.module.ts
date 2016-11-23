import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AnimalComponent } from './animal/animal.component';
import { AnimalAddComponent } from './add/animal-add.component';
import { AnimalUpdateComponent } from './update/animal-update.component';
import { AnimalsComponent } from './animals.component';
import { AvailableComponent } from './available/available.component';

import { AuthGuard } from '../_auth/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'animal/:id', component: AnimalComponent },
      { path: 'addanimal', component: AnimalAddComponent, canActivate: [AuthGuard] },
      { path: 'updateanimal', component: AnimalUpdateComponent, canActivate: [AuthGuard] },
      { path: 'animals', component: AnimalsComponent },
      { path: 'available', component: AvailableComponent }
    ])
  ],
  exports: [ RouterModule ]
})

export class AnimalRoutingModule {}
