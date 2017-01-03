import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../core/models/user';
import { UserService } from '../core/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
    private user: User;
    private currentUser = localStorage.getItem('currentUser').indexOf('"username":"');
    private left = 13;
    private right = localStorage.getItem('currentUser').indexOf('","token"');
    private username;
    private id;

    constructor(private service: UserService, private route: ActivatedRoute, private router: Router) {
        this.user = this.user || new User();
    }

    editProfile() {
        this.service.editUser(this.id, this.user) 
            .subscribe(user => {
                console.log(user);
                let url = `/users/${this.username}`;
                this.router.navigateByUrl(url);
            });
    }

    ngOnInit() {
        this.username = localStorage.getItem('currentUser').substr(this.left, this.right - this.left);
      
        this.service.getUserByUsername(this.username)
            .subscribe(res => {
                this.user = res;
                this.id = res._id;
                console.log(this.id);
            });
    }
}