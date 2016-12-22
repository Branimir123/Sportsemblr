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
var user_1 = require("./../core/models/user");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("../core/services/user.service");
var LoginComponent = (function () {
    function LoginComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.loading = false;
        this.returnUrl = '/';
        this.model = new user_1.User();
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        // this.userService.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.userService.login(this.model.email, this.model.password)
            .subscribe(function (data) {
            _this.router.navigateByUrl(_this.returnUrl);
        }, function (error) {
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        user_service_1.UserService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map