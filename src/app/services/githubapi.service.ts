import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Users } from '../interfaces/users';

@Injectable()
export class GithubapiService {

  private baseUrl: string = 'http://api.github.com/';
  private searchUsersUrl: string = 'http://api.github.com/search/users?q=';
  private searchQualifier: string = "+in:login";
  //https://api.github.com/search/users?q=jessica+in:login

  constructor(private http: Http) { }

  get(name: string) {
    return  this.http
    .get(`${this.baseUrl}${name}${this.searchQualifier}`, {headers: this.getHeaders()});
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'applicaion/json');
    return headers;
  }
}

function mapUsers(response: Response): Users[] {
  return response.json().results.map(toUser);
}

function toUser(userData: any) {
  let user = <Users>({
    id: userData.id
  });

}
