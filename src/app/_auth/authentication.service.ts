import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
// import { BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import * as moment from 'moment';

@Injectable()
export class AuthenticationService {
    public token: string;
    public expires: Date;
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
                  this.expires = this.getTokenExpiration(user.expires_in);
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('access_token', this.token);
                  localStorage.setItem('currentUser', JSON.stringify({username: username, token: this.token, expires: this.expires}));
                  // return true to indicate the successful login
                  return true;
                } else {
                  // return false to indicate failed login
                  return false;
                }
            });
    }

    public isLoggedIn(): boolean {
      let token = localStorage.getItem('currentUser');
      if (token) {
        let tokenObject = JSON.parse(token);
        let expiresOn = moment(tokenObject.expires);
        // Confirm there is a token, and it's expiration is later than now
        let isLoggedIn = tokenObject.token !== '' && expiresOn > moment();
        return isLoggedIn;
      }
      return false;
    }

    getToken(): string {
      if (localStorage.getItem('access_token')) {
        let token: string = localStorage.getItem('access_token');
        return token.length > 10 ? token : '';
      }
      return '';
    }

    getTokenExpiration(seconds): Date {
      let newDate: Date = moment().add(seconds, 'seconds').toDate();
      return newDate;
    }

    logout() {
      this.token = null;
      localStorage.removeItem('currentUser');
    }
}
