import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AnimalComponent } from './animal/animal.component';
import { AnimalAddComponent } from './add/animal-add.component';
import { AnimalUpdateComponent } from './update/animal-update.component';
import { AnimalsComponent } from './animals.component';
import { AvailableComponent } from './available/available.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'animal/:id', component: AnimalComponent },
      { path: 'addanimal', component: AnimalAddComponent },
      { path: 'updateanimal', component: AnimalUpdateComponent },
      { path: 'animals', component: AnimalsComponent },
      { path: 'available', component: AvailableComponent }
    ])
  ],
  exports: [ RouterModule ]
})

export class AnimalRoutingModule {}
