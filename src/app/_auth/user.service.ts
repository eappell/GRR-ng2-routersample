import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class UserService {
    private rootAuthUrl: string = 'http://api.herptracker.com/api/accounts';

    constructor(private http: Http) {}

    getAll() {
        return this.http.get(this.rootAuthUrl + '/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id) {
        return this.http.get(this.rootAuthUrl + '/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user) {
        return this.http.post('/create', user, this.jwt()).map((response: Response) => response.json());
    }

    update(user) {
        return this.http.put('/user/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id) {
        return this.http.delete('/user/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
