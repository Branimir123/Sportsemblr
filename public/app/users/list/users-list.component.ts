import { User } from './../../core/models/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
    moduleId: module.id,
    templateUrl: 'users-events.component.html'
})
export class UsersListComponent implements OnInit {
    private users: User[];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.getUsers()
            .subscribe(res => {
                this.users = res;
                console.log(this.users);
            });
    }
}