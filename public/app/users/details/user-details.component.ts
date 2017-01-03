import { ActivatedRoute } from '@angular/router';
import { User } from '../../core/models/user';
import { UserService } from '../../core/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './user-details.component.html'
})

export class UsersComponent implements OnInit {
    private user: User;
    private username;
    private noRatings: boolean = false;

    constructor(private service: UserService, private route: ActivatedRoute) {
        this.user = this.user || new User();
    }

    ngOnInit() {
        this.route.params
            .subscribe(params => {
                this.username = params['username'];

                this.service.getUserByUsername(this.username)
                    .subscribe(res => {
                        this.user = res;
                        if(res.ratings.length === 0){
                            this.noRatings = true;
                        }
                    });
            });
    }
}