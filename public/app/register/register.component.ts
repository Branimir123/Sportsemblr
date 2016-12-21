import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../core/services/index';
import { User } from '../core/models/user';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: User;
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService) {
        this.model = new User();
    }

    register() {
        this.loading = true;

        this.userService.create(this.model)
            .subscribe(
            data => {
                console.log(data);
                this.router.navigate(['/login']);
            },
            error => {
                console.log(error);
                this.loading = false;
            });
    }
}
