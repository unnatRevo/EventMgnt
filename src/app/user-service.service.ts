import { Injectable } from '@angular/core';
import { Http, HttpModule, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

import { ApiReference } from './api-reference';

@Injectable()
export class UserService {

    private _apis: ApiReference;

    constructor( private _http: Http ) {}

    authenticateUser(username: string, password: string) {
        let body = 'username=' + username + '&password=' + password;
        let header = new Headers();
        header.append('Content-type', 'application/json');
        return this._http.post(
            this._apis.checkUser,
            body,
            {
                headers: header
            })
            .map((response: Response) => response.json());
    }
}
