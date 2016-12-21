import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { User } from '../models/index';

@Injectable()
export class UserService {
    private signupUrl = '/api/signup';

    constructor(private http: Http) { }


    create(user: User) {
        return this.http.post('/api/signup', { user }, this.getHeaders())
            .map((response: Response) => response.json());
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (currentUser && currentUser.token) {
            headers.append('Authorization', 'Bearer ' + currentUser.token);
        }

        return new RequestOptions({ headers: headers });
    }

    login(email: string, password: string) {
        return this.http.post('/api/login', { email: email, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}