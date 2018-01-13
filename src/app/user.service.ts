import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {environment} from '../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {
    const body = {
      username: username,
      password: password
    };
    return this.http.post(`${environment.apiUrl}/auth`, body, {
      observe: 'response',
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
      .map((resp: HttpResponse<any>) => {
        console.log('Loging successful', resp);
        localStorage.setItem('AuthToken', resp.body.access_token);
        return true;
      });
  }
}
