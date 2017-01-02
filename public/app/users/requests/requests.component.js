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
var user_service_1 = require("./../../core/services/user.service");
var core_1 = require("@angular/core");
var RequestsComponent = (function () {
    function RequestsComponent(userService) {
        this.userService = userService;
        this.requests = this.requests || [];
    }
    RequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')).username;
        this.userService.getUserByUsername(this.currentUser)
            .subscribe(function (res) {
            _this.requests = res.requests;
        });
    };
    return RequestsComponent;
}());
RequestsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './requests.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], RequestsComponent);
exports.RequestsComponent = RequestsComponent;
//# sourceMappingURL=requests.component.js.map