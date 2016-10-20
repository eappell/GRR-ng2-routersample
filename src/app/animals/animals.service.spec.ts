/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AnimalService } from './animals.service';

describe('Service: AnimalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimalService]
    });
  });

  it('should ...', inject([AnimalService], (service: AnimalService) => {
    expect(service).toBeTruthy();
  }));
});
