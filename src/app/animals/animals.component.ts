import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IAnimal } from './shared/animal.model';
import { AnimalService } from './shared/animals.service';
import { AnimalAddComponent } from './add/animal-add.component';
import { AuthenticationService } from '../_auth/authentication.service';
import { Router } from '@angular/router';
import { MasonryOptions } from 'angular2-masonry';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.html',
  styleUrls: ['./animals.css']
})

export class AnimalsComponent implements OnInit, AfterViewInit {
  public title: string = 'Collection';
  public animals: IAnimal[];
  public errorMessage: string;
  IsAuthenticated: boolean;
  public masonryOptions: MasonryOptions = {
    transitionDuration: '0.5s',
    gutter: 35
  };

  constructor(
    private animalService: AnimalService,
    private router: Router,
    private modalService: NgbModal,
    private authService: AuthenticationService
  ) {}

  getAnimals(): void {
    if (!this.animals) {
      this.animalService.getAnimals().subscribe(
        animals => this.animals = animals,
        error => this.errorMessage = <any>error
      );
    }
  }

  filterAnimals(filter:string): void {
    if (this.animals) {
      switch (filter) {
        case "babies": {
          this.animals.filter(an => an.hatchDate)
        }
      }
    }
  }

  filterByAge(years:number) {
  }

  filterBySpecies(species:string) {

  }

  sortAnimals(filter:string): void {
  }

  sortByName(): IAnimal[] {
    return this.animals;
  }

  sortByAge(): IAnimal[] {
    return this.animals;
  }

  openAddAnimal() {
    this.modalService.open(AnimalAddComponent, { size: 'lg' });
  }

  gotoDetail(animal: IAnimal): void {
    let link = ['/animal', animal.Id];
    this.router.navigate(link);
  }

  ngOnInit() {
    this.authService.isAuthenticated()
      .subscribe(loggedIn => this.IsAuthenticated = loggedIn);
    this.getAnimals();
  }

  ngAfterViewInit(){
    this.authService.isAuthenticated()
      .subscribe(loggedIn => this.IsAuthenticated = loggedIn);
  }
}
