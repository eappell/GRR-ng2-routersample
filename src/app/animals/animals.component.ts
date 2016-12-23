import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { IAnimal } from './shared/animal.model';
import { AnimalService } from './shared/animals.service';
import { AnimalAddComponent } from './add/animal-add.component';
import { AuthenticationService } from '../_auth/authentication.service';
import { Router } from '@angular/router';
import { AngularMasonry, MasonryOptions, MASONRY_DIRECTIVES } from 'angular2-masonry';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.html',
  styleUrls: ['./animals.css']
})

export class AnimalsComponent implements OnInit {
  public title: string = 'Collection';
  public animals: IAnimal[];
  public masonryAnimals: IAnimal[];
  public errorMessage: string;
  @ViewChild(AngularMasonry) private masonry: AngularMasonry;

  public masonryOptions: MasonryOptions = {
    transitionDuration: '0.5s',
    gutter: 10
  };

  constructor(
    private animalService: AnimalService,
    private router: Router,
    private modalService: NgbModal,
    private authService: AuthenticationService
  ) { }

  getAnimals(): void {
    if (!this.animals) {
      this.animalService.getAnimals().subscribe(
        animals => this.gotAnimals(animals),
        error => this.gotAnimalsFailed(error)
      );
    }
  }

  gotAnimals(animals): void {
    this.animals = animals.sort(this.sortByName);
    this.masonryAnimals = animals.sort(this.sortByName);
  }

  gotAnimalsFailed(error) {
    this.errorMessage = <any>error;
    console.log(error);
  }

  resetFilters(): void {
    let selFilters = document.getElementById('selFilter') as HTMLSelectElement;
    let selStatuses = document.getElementById('selStatus') as HTMLSelectElement;
    selFilters.options[0].selected = true;
    selStatuses.options[0].selected = true;
    this.masonryAnimals = this.animals;
  }

  filterAnimals(e): void {
    let filter = e.srcElement.selectedOptions[0].value;
    let selFilters = document.getElementById('selFilter') as HTMLSelectElement;
    let selStatuses = document.getElementById('selStatus') as HTMLSelectElement;
    if (this.masonryAnimals) {
      switch (filter) {
        case 'active':
          this.masonryAnimals = this.statusFilter('in collection');
          selFilters.options[0].selected = true;
          break;
        case 'available':
          this.masonryAnimals = this.statusFilter('available');
          selFilters.options[0].selected = true;
          break;
        case 'sold':
          this.masonryAnimals = this.statusFilter('sold');
          selFilters.options[0].selected = true;
          break;
        case 'deceased':
          this.masonryAnimals = this.statusFilter('deceased');
          selFilters.options[0].selected = true;
          break;
        case 'hold':
          this.masonryAnimals = this.statusFilter('hold');
          selFilters.options[0].selected = true;
          break;
        case 'waitinglist':
          this.masonryAnimals = this.statusFilter('waitinglist');
          selFilters.options[0].selected = true;
          break;
        case 'babies':
          this.masonryAnimals = this.ageFilter(3, 'under');
          selStatuses.options[0].selected = true;
          break;
        case 'males':
          this.masonryAnimals = this.genderFilter('m');
          selStatuses.options[0].selected = true;
          break;
        case 'females':
          this.masonryAnimals = this.genderFilter('f');
          selStatuses.options[0].selected = true;
          break;
        case 'adults':
          this.masonryAnimals = this.ageFilter(3, 'over');
          selStatuses.options[0].selected = true;
          break;
        case 'chondros':
          this.masonryAnimals = this.speciesFilter('Green Tree Python');
          selStatuses.options[0].selected = true;
          break;
        default:
          selFilters.options[0].selected = true;
          selStatuses.options[0].selected = true;
          this.masonryAnimals = null;
          this.masonryAnimals = this.animals;
          break;
      }
    }
  }

  // FILTERS
  speciesFilter = (species) => this.animals.filter(animal => animal.Species.toLowerCase() === species.toLowerCase()).sort(this.sortByName);
  genderFilter = (gender) => this.animals.filter(animal => animal.Gender.toLowerCase() === gender.toLowerCase()).sort(this.sortByName);
  ageFilter = (age, overUnder) => (overUnder === 'under') ?
    this.animals.filter(animal => moment(animal.DOB).isAfter(moment().subtract('years', age))).sort(this.sortByAge) :
    this.animals.filter(animal => moment(animal.DOB).isBefore(moment().subtract('years', age))).sort(this.sortByAge);
  nameFilter = (name) => this.animals.filter(animal => animal.Name === name).sort(this.sortByName);
  statusFilter = (status) => this.animals.filter(animal => animal.Status.Name.toLowerCase() === status.toLowerCase()).sort(this.sortByName);
  // END FILTERS

  sortByName(a: IAnimal, b: IAnimal) {
    let sort = (a.Name ? a.Name : a.TrackingId > b.Name ? b.Name : b.TrackingId) ? 1 : -1;
    return sort;
  }

  sortByAge(a: IAnimal, b: IAnimal) {
    let ageA = moment().diff(moment(a.DOB), 'years');
    let ageB = moment().diff(moment(b.DOB), 'years');
    let sort = (ageA - ageB) ? 1 : -1;
    return sort;
  }

  changeSelect(e): void {
    let filter = e.srcElement.selectedOptions[0].value;
    alert('Selection Changed: ' + filter);
  }

  openAddAnimal(): void {
    this.modalService.open(AnimalAddComponent, { size: 'lg' });
  }

  gotoDetail(animal: IAnimal): void {
    let link = ['/animal', animal.Id];
    this.router.navigate(link);
  }

  ngOnInit() {
    this.getAnimals();
  }
}
