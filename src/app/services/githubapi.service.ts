import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Users } from '../interfaces/users';

@Injectable()
export class GithubapiService {

  private baseUrl: string = 'http://api.github.com/';
  private searchUsersUrl: string = 'http://api.github.com/search/users?q=';
  private searchQualifier: string = "+in:login";
  //https://api.github.com/search/users?q=jessica+in:login

  private headers: Headers = new Headers();
  private requestOptions: RequestOptionsArgs = {};
  private apiServer: string = "https://api.github.com";

  constructor(private http: Http) { 
    this.headers.set("Content-Type", "application/json");
    this.requestOptions.headers = this.headers;
  }

  get(endPoint: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.get(this.createUrl(endPoint), this.getRequestOptions(options));
}
  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'applicaion/json');
    return headers;
  }

  createUrl(endPoint):string {
    
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
