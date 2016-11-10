import { Component, OnInit } from '@angular/core';
import { Animal } from './shared/animal.model';
import { AnimalService } from './shared/animals.service';
import { Router } from '@angular/router';
import { MasonryOptions } from 'angular2-masonry';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.html',
  styleUrls: ['./animals.css']
})

export class AnimalsComponent implements OnInit {
  public title: string = 'Collection';
  public animals: Animal[];
  public errorMessage: string;
  public masonryOptions: MasonryOptions = {
    transitionDuration: '0.5s',
    gutter: 35
  };

  constructor(private animalService: AnimalService, private router: Router) {}

  getAnimals(): void {
    if (!this.animals) {
      this.animalService.getAnimals().subscribe(
        animals => this.animals = animals,
        error => this.errorMessage = <any>error
      );
    }
  }

  gotoDetail(animal: Animal): void {
    let link = ['/animal', animal.Id];
    this.router.navigate(link);
  }

  ngOnInit() {
    this.getAnimals();
  }
}
