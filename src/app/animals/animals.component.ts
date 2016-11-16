import { Component, OnInit } from '@angular/core';
import { IAnimal } from './shared/animal.model';
import { AnimalService } from './shared/animals.service';
import { AnimalAddComponent } from './add/animal-add.component';
import { Router } from '@angular/router';
import { MasonryOptions } from 'angular2-masonry';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.html',
  styleUrls: ['./animals.css']
})

export class AnimalsComponent implements OnInit {
  public title: string = 'Collection';
  public animals: IAnimal[];
  public errorMessage: string;
  public masonryOptions: MasonryOptions = {
    transitionDuration: '0.5s',
    gutter: 35
  };

  constructor(
    private animalService: AnimalService,
    private router: Router,
    private modalService: NgbModal
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
    if(this.animals) {
      switch(filter) {
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

  openAddAnimal(content) {
    const addAnimalModalRef = this.modalService.open(AnimalAddComponent, { size: 'lg' });
    // addAnimalModalRef.componentInstance.name = 'World';
  }

  gotoDetail(animal: IAnimal): void {
    let link = ['/animal', animal.Id];
    this.router.navigate(link);
  }

  ngOnInit() {
    this.getAnimals();
  }
}
