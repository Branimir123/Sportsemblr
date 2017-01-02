// import { Component, OnInit } from '@angular/core'
// import { Router, ActivatedRoute } from '@angular/router';
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
// @Component({
//     moduleId: module.id,
//     templateUrl: 'profile.component.html'
// })
// export class ProfileComponent {}
var router_1 = require("@angular/router");
var user_1 = require("../core/models/user");
var core_1 = require("@angular/core");
var event_service_1 = require("../core/services/event.service");
var ProfileComponent = (function () {
    function ProfileComponent(service, route) {
        this.service = service;
        this.route = route;
        this.user = this.user || new user_1.User();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = params['id'];
            _this.service.getEventById(_this.id)
                .subscribe(function (res) {
                _this.user = res;
                console.log(res);
            });
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './profile.component.html'
    }),
    __metadata("design:paramtypes", [event_service_1.EventService, router_1.ActivatedRoute])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map