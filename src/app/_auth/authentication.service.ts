import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    public token: string;
    private rootAuthUrl: string = 'http://api.herptracker.com/oauth';

    constructor(private http: Http) {
        // set token if saved in local storage
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username, password) {
        // let creds   = JSON.stringify({ username: username, password: password, grant_type: 'password' });
        let creds   = "username=" + username + "&password=" + password + "&grant_type=password";
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post(this.rootAuthUrl + '/token', creds, options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.access_token) {
                  this.token = user.access_token;
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify({username: username, token: this.token}));
                  // return true to indicate the successful login
                  return true;
                } else {
                  // return false to indicate failed login
                  return false;
                }
            });
    }

    logout() {
      this.token = null;
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
    }
}
