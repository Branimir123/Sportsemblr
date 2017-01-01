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
var rating_service_1 = require("../core/services/rating.service");
var PlayerRatingComponent = (function () {
    function PlayerRatingComponent(service) {
        this.service = service;
        this.players = [];
        this.currentLoggedUser = JSON.parse(localStorage.getItem('currentUser')).username;
    }
    PlayerRatingComponent.prototype.ratePlayers = function () {
        this.service.ratePlayers(this.players, this.currentLoggedUser, this.sport)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    return PlayerRatingComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PlayerRatingComponent.prototype, "players", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PlayerRatingComponent.prototype, "sport", void 0);
PlayerRatingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: '<player-rating></player-rating>',
        templateUrl: './player-rating.component.html'
    }),
    __metadata("design:paramtypes", [rating_service_1.RatingService])
], PlayerRatingComponent);
exports.PlayerRatingComponent = PlayerRatingComponent;
//# sourceMappingURL=player-rating.component.js.map