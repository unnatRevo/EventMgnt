import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';

import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [
      UserService
  ]
})
export class UserComponent {
    private _userAuth: Observable<any>;
    constructor(private _userService: UserService) { console.log('test'); }

    onButtonClick(username: string, password: string) {
        this._userService.authenticateUser(username, password)
            .subscribe(result => {this._userAuth = result.json(); });
        console.log('User Login result : ' + this._userAuth);
    }
}
