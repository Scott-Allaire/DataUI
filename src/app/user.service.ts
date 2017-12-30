import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {environment} from "../environments/environment";
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {
    let body = {
      username: username,
      password: password
    };
    return this.http.post(`${environment.apiUrl}/login`, body, {
      observe: 'response',
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
      .map(resp => {
        localStorage.setItem("AuthToken", resp.headers.get('Authorization'));
        return true;
      })
  }
}
