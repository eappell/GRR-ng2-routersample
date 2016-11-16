import { Component, OnInit } from '@angular/core';
import { IAnimal } from '../shared/animal.model';
import { AnimalService } from '../shared/animals.service';
import { Router } from '@angular/router';
import { MasonryOptions } from 'angular2-masonry';

@Component({
  selector: 'app-available',
  templateUrl: './available.html',
  styleUrls: ['./available.css'],
  providers: [AnimalService]
})

export class AvailableComponent implements OnInit {
  public title: string = 'Available Listing';
  public available: IAnimal[];
  public errorMessage: string;
  public masonryOptions: MasonryOptions = {
    transitionDuration: '0.8s',
    gutter: 35
  };

  constructor(private animalService: AnimalService, private router: Router) { }

  getAnimals(): void {
    if (!this.available) {
      this.animalService.getAvailableAnimals().subscribe(
        animals => this.available = animals,
        error => this.errorMessage = <any>error
      );
    }
  }

  gotoDetail(animal: IAnimal): void {
    let link = ['/animal', animal.Id];
    this.router.navigate(link);
  }

  ngOnInit() {
    this.getAnimals();
  }
}
