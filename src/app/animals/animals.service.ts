import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { IAnimal } from './animal';

@Injectable()
export class AnimalService {
    private _animalUrl = 'https://gold-river-reptile.firebaseio.com/animals.json';
    private _animalsSvc = 'http://api.herptracker.com/odata/Animals';
    private _animalsJson = '../data/animals.json';
    private _animalStatusQuery = '?$expand=Status';
    private _animalsAvailableQuery = '';

    constructor(private _http: Http) { }

    getAnimalsPromise(): Promise<IAnimal[]> {
      return this._http.get(this._animalsSvc)
                  .toPromise()
                  .then(response => response.json().value as IAnimal[])
                  .catch(this.handleError);
    }

    getAnimalsFromService(): Observable<IAnimal[]> {
        alert('getting the animals...');
        return this._http.get(this._animalsSvc)
            .map((response: Response) => <IAnimal[]>response.json())
            .do(data => console.log('All Animals: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getAnimalsFromJson(): Observable<IAnimal[]> {
      return this._http.get(this._animalsJson)
            .map((response: Response) => <IAnimal[]>response.json())
            .do(data => console.log('All Animals: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getAnimals(): Observable<IAnimal[]> {
        return this._http.get(this._animalUrl)
            .map((response: Response) => <IAnimal[]>response.json())
            .do(data => console.log('All Animals: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getAnimal(id: string): Observable<IAnimal> {
        return this.getAnimals()
            .map((animals: IAnimal[]) => animals.find(p => p.animalId === id));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
