import { Component, OnInit } from '@angular/core';

import { IAnimal } from '../shared/animal.model';
import { AnimalService } from '../shared/animals.service';

@Component({
  selector: 'app-animal-update',
  templateUrl: './animal-update.component.html',
  styleUrls: ['./animal-update.component.css']
})
export class AnimalUpdateComponent implements OnInit {

  public animal: IAnimal;
  errorMessage: string;

  constructor(private _animalService: AnimalService) { }

  ngOnInit() {
  }

  updateAnimal (_animal: IAnimal): void {
    if(!_animal) { return; }
    this._animalService.addAnimal(_animal)
        .subscribe (
          animal => this.animal = animal,
          error => this.errorMessage = <any>error);
  }
}
