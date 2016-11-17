import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AnimalService } from './shared/animals.service';
import { AnimalsComponent } from './animals.component';
import { AnimalComponent } from './animal/animal.component';
import { AvailableComponent } from './available/available.component';
import { AnimalAddComponent } from './add/animal-add.component';
import { AnimalUpdateComponent } from './update/animal-update.component';
import { AnimalCardComponent } from './shared/animal-card.component';
import { AnimalRoutingModule } from './animal-routing.module';

import { SharedModule } from '../shared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextMaskModule, conformToMask, MaskedInputDirective } from 'angular2-text-mask';

@NgModule({
  imports: [
    SharedModule,
    AnimalRoutingModule,
    NgbModule,
    TextMaskModule
  ],
  declarations: [
    AnimalsComponent,
    AnimalComponent,
    AnimalAddComponent,
    AnimalUpdateComponent,
    AnimalCardComponent,
    AvailableComponent
  ],
  exports: [
    AnimalCardComponent,
    AnimalAddComponent,
    AnimalUpdateComponent
  ],
  providers: [ AnimalService ]
})
export class AnimalsModule { }
