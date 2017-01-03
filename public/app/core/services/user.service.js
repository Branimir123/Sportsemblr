"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.signupUrl = '/api/signup';
        this.localStorageUser = 'currentUser';
    }
    UserService.prototype.register = function (user) {
        return this.http.post('/api/signup', { user: user }, this.getHeaders())
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var currentUser = JSON.parse(localStorage.getItem(this.localStorageUser));
        if (currentUser && currentUser.token) {
            headers.append('Authorization', 'Bearer ' + currentUser.token);
        }
        return new http_1.RequestOptions({ headers: headers });
    };
    UserService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post('/api/login', { email: email, password: password })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (response.ok) {
                localStorage.setItem(_this.localStorageUser, JSON.stringify(user));
            }
        });
    };
    UserService.prototype.logout = function () {
        var user = JSON.parse(localStorage.getItem(this.localStorageUser));
        localStorage.removeItem(this.localStorageUser);
        return this.http.get('api/logout');
    };
    UserService.prototype.getUserByUsername = function (username) {
        return this.http.get("/api/users/" + username)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getUsers = function () {
        return this.http.get('/api/users')
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.editUser = function (id, user) {
        console.log(this.getHeaders());
        return this.http.post("/api/users/" + id, user, this.getHeaders())
            .map(function (res) { return res; });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map