import { PlayerRating } from './../core/models/player-rating';
import { Component, Input } from '@angular/core';
import { RatingService } from '../core/services/rating.service';

@Component({
    moduleId: module.id,
    selector: '<player-rating></player-rating>',
    templateUrl: './player-rating.component.html'
})
export class PlayerRatingComponent {
    @Input() players: string[] = [];
    @Input() sport: string;
    private playersWithRating: PlayerRating[];
    private currentLoggedUser = JSON.parse(localStorage.getItem('currentUser')).username;

    constructor(private service: RatingService) {
    }

    private ratePlayers() {
        this.service.ratePlayers(this.players, this.currentLoggedUser, this.sport)
            .subscribe(res => {
                console.log(res);
            });
    }
}
