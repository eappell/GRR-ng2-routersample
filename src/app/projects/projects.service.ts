import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import {IProject} from './Project';

@Injectable()
export class ProjectsService {
    private _projectUrl = 'https://gold-river-reptile.firebaseio.com/projects.json';
    private _projectSvc = 'http://api.herptracker.com/odata/Projects?$expand=Sire,Dam';
    private _projectsJson = '../data/projects.json';

    constructor(private _http: Http) { }

    getProjectsPromise(): Promise<IProject[]> {
      return this._http.get(this._projectSvc)
                  .toPromise()
                  .then(response => response.json().value as IProject[])
                  .catch(this.handleError);
    }

    getProjectsFromService(): Observable<IProject[]> {
        alert('getting the projects...');
        return this._http.get(this._projectSvc)
            .map((response: Response) => <IProject[]>response.json())
            .do(data => console.log('All Projects: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProjectsJson(): Observable<IProject[]> {
        return this._http.get(this._projectsJson)
            .map((response: Response) => <IProject[]>response.json())
            .do(data => console.log('All Projects: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProjects(): Observable<IProject[]> {
        return this._http.get(this._projectUrl)
            .map((response: Response) => <IProject[]>response.json())
            .do(data => console.log('All Projects: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProject(id: string): Observable<IProject> {
        return this.getProjects()
            .map((projects: IProject[]) => projects.find(p => p.projectId === id));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
