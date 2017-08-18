import { Injectable } from '@angular/core';
import { Http, HttpModule, Headers, Response, RequestOptions, RequestMethod, Request } from '@angular/http';
import 'rxjs/Rx';

import { ApiReference } from './api-reference';

@Injectable()
export class UserService {
    public _uri = 'http://localhost:54820/api/Home/CheckUser';
    constructor( private _http: Http) {}

    authenticateUser(uName: string, pwd: string) {
        // const body = {username: uName, password: pwd };
        const body = 'username=' + uName + '&password=' + pwd;
        console.log(body);
        const header = new Headers();
        header.append('Accept', 'application/json');
        const reqOption = new RequestOptions({
            method: RequestMethod.Post,
            url: this._uri,
            headers: header,
            body: JSON.stringify(body)
        });
        
        return this._http.request(new Request(reqOption))
        .map((res: Response) => {
                return { status: res.status, json: res.json() };
        });
        // return this._http.post(this._uri,
        //     JSON.stringify(body),{ headers:header })
        //     .map((response: Response) => response.json());
    }
}
