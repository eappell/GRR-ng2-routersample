import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { IAnimal } from '../shared/animal.model';
import { AnimalService } from '../shared/animals.service';
import { SharedServices } from '../../shared/shared.services';
import { AuthenticationService } from '../../_auth/authentication.service';

import { Observable } from 'rxjs/Rx';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-animal-add',
  templateUrl: './animal-add.component.html',
  styleUrls: ['./animal-add.component.css']
})
export class AnimalAddComponent implements OnInit {
  public animal: IAnimal;
  submitted: boolean = false;
  statuses: any[];
  projects: any[];
  owners: any[];
  errorMessage: string;

  public mask: Array<string | RegExp>;
  public formControlInput: FormControl = new FormControl();

  constructor(private _animalService: AnimalService,
              private _sharedServices: SharedServices,
              private _authService: AuthenticationService,
              public activeModal: NgbActiveModal) { }

  onSubmit() { this.submitted = true; }

  ngOnInit() {
    this._sharedServices.getData('Status')
        .subscribe(
          status => this.statuses = status,
          error => this.errorMessage = <any>error
        );
    this._sharedServices.getData('Projects?$expand=Sire,Dam&orderby=DateStart desc')
        .subscribe(
          projects => this.projects = projects,
          error => this.errorMessage = <any>error
        );
    this.mask = ['$',/[1-9]/, /\d/, /\d?/, /\d?/];
  }

  addAnimal(_animal: IAnimal): void {
    if (!_animal) { return; }

    this._animalService.addAnimal(_animal)
        .subscribe (
          animal => this.animal = animal,
          error => this.errorMessage = <any>error);
  }
}
