import { ActivatedRoute } from '@angular/router';
import { User } from '../../core/models/user';
import { UserService } from '../../core/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './users.component.html'
})

export class UsersComponent implements OnInit {
    private user: User;
    private username;

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
                        console.log(res);
                    });
            });
    }
}