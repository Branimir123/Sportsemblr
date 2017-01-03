import { User } from './../core/models/user';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../core/services/user.service';


@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: User;
    loading = false;
    returnUrl: string = '/';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService) {
        this.model = new User();
    }

    ngOnInit() {
        // reset login status
        // this.userService.logout();
    }

    login() {
        this.loading = true;

        this.userService.login(this.model.email, this.model.password)
            .subscribe(
            data => {
                this.router.navigateByUrl(this.returnUrl);
                location.reload();
            },
            error => {
                this.loading = false;
            });
    }
}
