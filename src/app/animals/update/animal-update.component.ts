import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'

import { IAnimal } from '../shared/animal.model';
import { AnimalService } from '../shared/animals.service';
import { SharedServices } from '../../shared/shared.services';

@Component({
  selector: 'app-animal-update',
  templateUrl: './animal-update.component.html',
  styleUrls: ['./animal-update.component.css']
})
export class AnimalUpdateComponent implements OnInit {
  @Input() animal: IAnimal;
  errorMessage: string;
  statuses: any[];
  public mask: Array<string | RegExp>;
  public formControlInput: FormControl = new FormControl();

  constructor(private _animalService: AnimalService, private _sharedServices: SharedServices) { }

  ngOnInit() {
    this._sharedServices.getData('Status')
        .subscribe(
          status => this.statuses = status,
          error => this.errorMessage = <any>error
        );
    this.mask = ['$',/[1-9]/, /\d/, /\d/, /\d/,'.', /\d/, /\d/];
  }

  updateAnimal (_animal: IAnimal): void {
    if(!_animal) { return; }
    this._animalService.addAnimal(_animal)
        .subscribe (
          animal => this.animal = animal,
          error => this.errorMessage = <any>error);
  }
}
