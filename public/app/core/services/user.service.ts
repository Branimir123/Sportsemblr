import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { User } from '../models/index';

@Injectable()
export class UserService {
    private signupUrl = '/api/signup';
    private localStorageUser = 'currentUser';

    constructor(private http: Http) { }

    register(user: User) {
        return this.http.post('/api/signup', { user }, this.getHeaders())
            .map((response: Response) => response.json());
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let currentUser = JSON.parse(localStorage.getItem(this.localStorageUser));

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

                if (response.ok) {
                    localStorage.setItem(this.localStorageUser, JSON.stringify(user));
                }
            });
    }

    logout() {
        let user = JSON.parse(localStorage.getItem(this.localStorageUser));
        localStorage.removeItem(this.localStorageUser);

        return this.http.get('api/logout');
    }

    getUserByUsername(username) {
        return this.http.get(`/api/users/${username}`)
            .map(res => res.json());
    }

    getUsers() {
        return this.http.get('/api/users')
            .map(res => res.json());
    }
}