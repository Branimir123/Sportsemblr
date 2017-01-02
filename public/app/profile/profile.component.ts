// import { Component, OnInit } from '@angular/core'
// import { Router, ActivatedRoute } from '@angular/router';

// @Component({
//     moduleId: module.id,
//     templateUrl: 'profile.component.html'
// })

// export class ProfileComponent {}

import { ActivatedRoute } from '@angular/router';
import { User } from '../core/models/user';
import { UserService } from '../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../core/services/event.service';

@Component({
    moduleId: module.id,
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
    private user: User;
    private id;

    constructor(private service: EventService, private route: ActivatedRoute) {
        this.user = this.user || new User();
    }

    ngOnInit() {
        this.route.params
            .subscribe(params => {
                this.id = params['id'];

                this.service.getEventById(this.id)
                    .subscribe(res => {
                        this.user = res;
                        console.log(res)
                    });
            });
    }
}