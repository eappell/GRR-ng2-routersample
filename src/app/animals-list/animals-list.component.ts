import { Component, OnInit } from '@angular/core';
import { Animal } from '../animals/animal';
import { Project } from '../projects/project';
import { AnimalService } from '../animals/animals.service';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.html',
  styles: ['./animals-list.css'],
  providers: [AnimalService]
})

export class AnimalsListComponent implements OnInit {
  public title: string = 'Animal Listing';
  public animals: Animal[];

  constructor(private animalService: AnimalService) { }

  getAnimals(): void {
    if (!this.animals) {
      this.animalService.getAnimalsPromise().then(response => this.animals = response);
    }
  }

  ngOnInit() {
    this.getAnimals();
  }
}
