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
var user_service_1 = require("./../core/services/user.service");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var NavigationComponent = (function () {
    function NavigationComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.hasLoggedUser = localStorage.getItem('currentUser') !== null;
    }
    NavigationComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (res) {
            if (res.ok) {
                _this.hasLoggedUser = !_this.hasLoggedUser;
            }
        });
    };
    NavigationComponent.prototype.login = function () {
        this.router.navigateByUrl('/login');
    };
    NavigationComponent.prototype.events = function () {
        this.router.navigateByUrl('/events');
    };
    NavigationComponent.prototype.create = function () {
        this.router.navigateByUrl('/events/new');
    };
    NavigationComponent.prototype.users = function () {
        this.router.navigateByUrl('/users');
    };
    NavigationComponent.prototype.profile = function () {
        this.router.navigateByUrl('/profile');
    };
    NavigationComponent.prototype.requests = function () {
        this.router.navigateByUrl('/requests');
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'nav-bar',
        templateUrl: 'navbar.component.html',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], NavigationComponent);
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navbar.component.js.map