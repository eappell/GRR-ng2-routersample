import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { IAnimal } from '../shared/animal.model';
import { AnimalService } from '../shared/animals.service';
import { SharedServices } from '../../shared/shared.services';
import { AuthenticationService } from '../../_auth/authentication.service';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-animal-update',
  templateUrl: './animal-update.component.html',
  styleUrls: ['./animal-update.component.css']
})
export class AnimalUpdateComponent implements OnInit {
  @Input() animal: IAnimal;
  submitted: boolean = false;
  errorMessage: string;
  statuses: any[];
  projects: any[];
  owners: any[];

  public mask: Array<string | RegExp>;
  public formControlInput: FormControl = new FormControl();

  constructor(private _animalService: AnimalService,
              private _sharedServices: SharedServices,
              private _authService: AuthenticationService,
              public activeModal: NgbActiveModal) { }

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.animal); }

  ngOnInit() {
    let animalId = parseInt(this.animal.Id);
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
    // debugger;
    this._animalService.getAnimal(animalId).subscribe(a => this.animal = a);
  }

  updateAnimal (_animal: IAnimal): void {
    if (!_animal) { return; }

    this._animalService.updateAnimal(this.animal)
        .subscribe (
          animal => this.animal = animal,
          error => this.errorMessage = <any>error);
  }
}
