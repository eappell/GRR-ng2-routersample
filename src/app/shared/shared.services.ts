import {Injectable} from '@angular/core';
import {Http, URLSearchParams, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/cache';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class SharedServices {
    private _serviceRoot = 'http://api.herptracker.com/odata/';

    constructor(private _http: Http) { }

    getStatuses(): Observable<{}> {
      return this._http.get(this._serviceRoot + 'Status')
                  .map(response => response.json().value as any[])
                  .cache()
                  .do(data => console.table('Status: ' + JSON.stringify(data)))
                  .catch(this.handleError);
    }

    getData(dataType): Observable<{}[]> {
      return this._http.get(this._serviceRoot + dataType)
                  .map(response => response.json().value as any[])
                  .cache()
                  .do(data => console.table(dataType + ': ' + JSON.stringify(data)))
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
