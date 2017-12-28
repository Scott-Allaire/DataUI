import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  login(username:string, password:string) {
    return this.http.post(`${environment.apiUrl}/login`, {
      username: username,
      password: password
    })
  }
}
