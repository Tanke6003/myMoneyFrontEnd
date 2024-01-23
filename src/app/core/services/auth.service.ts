    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import { Observable, of } from 'rxjs';

    @Injectable()
    export class AuthService {

    constructor(private _http:HttpClient) { }

        signUp(form:any):Observable<any> {
            //return this._http.post('http://localhost:3000/api/auth/signup',form);
            const userID = 'dummyUserID';
            const token = 'dummyToken';
            // Devolver un observable que emite el objeto con userID y token
            return of({ userID, token });
        }
    }