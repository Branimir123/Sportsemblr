import { UserService } from './../core/services/user.service';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'search-box',
    templateUrl: 'search.component.html',
})
export class SearchComponent {
    hasLoggedUser: boolean = localStorage.getItem('currentUser') !== null;

    constructor(private userService: UserService,) {
    }
}
