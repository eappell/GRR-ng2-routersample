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

  updateAnimal (_animal: IAnimal): void {
    if (!_animal) { return; }

    let token: string = this._authService.getToken();
    if (token.length > 10) {
      this._animalService.updateAnimal(token, this.animal)
          .subscribe (
            animal => this.animal = animal,
            error => this.errorMessage = <any>error);
    }
  }
}
