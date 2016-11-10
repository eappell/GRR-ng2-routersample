import { Component, OnInit } from '@angular/core';
import { IAnimal, Animal } from '../shared/animal.model';
import { AnimalService } from '../shared/animals.service';

import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-animal-add',
  templateUrl: './animal-add.component.html',
  styleUrls: ['./animal-add.component.css']
})
export class AnimalAddComponent implements OnInit {

  public animal: IAnimal;
  errorMessage: string;

  constructor(private _animalService: AnimalService) { }

  ngOnInit() {
  }

  addAnimal(_animal: IAnimal): void {
    if(!_animal) { return; }
    this._animalService.addAnimal(_animal)
        .subscribe (
          animal => this.animal = animal,
          error => this.errorMessage = <any>error);
  }
}
