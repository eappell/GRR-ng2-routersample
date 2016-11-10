import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import {IProject} from './project.model';

@Injectable()
export class ProjectsService {
    private _projectSvc = 'http://api.herptracker.com/odata/Projects';

    constructor(private _http: Http) { }

    getProject(id: number): Observable<IProject> {
      let svcUrl = this._projectSvc + '(' + id + ')?$expand=Events,Photos,Sire,Dam,Offspring';
      return this._http.get(svcUrl)
                  .map(response => response.json() as IProject)
                  .catch(this.handleError);
    }

    getProjects(): Observable<IProject[]> {
      return this._http.get(this._projectSvc + '?$expand=Sire,Dam')
                  .map(response => response.json().value as IProject[])
                  .catch(this.handleError);
    }

    addproject(project: IProject): Observable<IProject> {
      let bodyString = JSON.stringify(project); // Stringify payload
      let headers    = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
      let options    = new RequestOptions({ headers: headers }); // Create a request option

      return this._http.post(this._projectSvc, { project }, options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    updateproject(project: IProject): Observable<IProject> {
      let bodyString = JSON.stringify(project);
      let headers      = new Headers({ 'Content-Type': 'application/json' });
      let options       = new RequestOptions({ headers: headers });

      return this._http.patch(`${this._projectSvc}(${project['id']})`, project, options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    deleteproject(id: number): Observable<IProject> {
      return this._http.delete(`${this._projectSvc}/(${id})`)
                        .map(this.extractData)
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
