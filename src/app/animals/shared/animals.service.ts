import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../../_auth/authentication.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/cache';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IAnimal } from './animal.model';

@Injectable()
export class AnimalService {
    private _animalsSvc = 'http://api.herptracker.com/odata/Animals';

    constructor(private _http: Http, private authService: AuthenticationService) { }

    getAnimal(id: number): Observable<IAnimal> {
      let svcUrl = this._animalsSvc + '(' + id.toString() + ')?$expand=Photos,Events,Status,ProductOfProject($expand=Sire,Dam)';
      return this._http.get(svcUrl, {  })
                  .map((response: Response) => response.json() as IAnimal)
                  .cache()
                  // .do(data => console.log('Animal: ' + JSON.stringify(data)))
                  .catch(this.handleError);
    }

    getAvailableAnimals(): Observable<IAnimal[]> {
      let params: URLSearchParams = new URLSearchParams();
      params.set('$expand', 'Status');
      params.set('$filter', 'Status/Name eq \'available\'');
      return this._http.get(this._animalsSvc, { search: params })
                  .map(response => response.json().value as IAnimal[])
                  .cache()
                  // .do(data => console.log('Available: ' + JSON.stringify(data)))
                  .catch(this.handleError);
    }

    getAnimals(): Observable<IAnimal[]> {
      return this._http.get(this._animalsSvc + '?$expand=Status')
                  .map(response => response.json().value as IAnimal[])
                  .cache()
                  // .do(data => console.log('Animals: ' + JSON.stringify(data)))
                  .catch(this.handleError);
    }

    addAnimal(animal: IAnimal): Observable<IAnimal> {
      let token = this.authService.getToken();
      if (token === null || token.length < 9) { return; }

      let authHeader = new Headers({ 'Content-Type': 'application/json' });
      authHeader.append('Authorization', 'Bearer ' + token);

      let options    = new RequestOptions({ headers: authHeader });
      // let bodyString    = JSON.stringify(animal);

      return this._http.post(this._animalsSvc, animal, options)
                        .map(this.extractData)
                        .cache()
                        .catch(this.handleError);
    }

    updateAnimal(animal: IAnimal): Observable<IAnimal> {
      let token = this.authService.getToken();
      if (token === null || token.length < 1) { return; }

      let authHeader = new Headers({ 'Content-Type': 'application/json' });
      authHeader.append('Authorization', 'Bearer ' + token);

      let options    = new RequestOptions({ headers: authHeader });
      // let bodyString    = JSON.stringify(animal);

      return this._http.patch(`${this._animalsSvc}(${animal.Id})`, animal, options)
                        .map(this.extractData)
                        .cache()
                        .catch(this.handleError);
    }

    deleteAnimal(id: number): Observable<IAnimal> {
      let token = this.authService.getToken();
      if (token === null || token.length < 1) { return; }

      let authHeader = new Headers({ 'Content-Type': 'application/json' });
      authHeader.append('Authorization', 'Bearer ' + token);

      let options    = new RequestOptions({ headers: authHeader });
      return this._http.delete(`${this._animalsSvc}/(${id})`, options)
                        .map(this.extractData)
                        .cache()
                        .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    private extractData(res: Response) {
      let body = res.json();
      return body.data || { };
    }
}
