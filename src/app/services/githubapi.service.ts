import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Users } from '../interfaces/users';
import { User } from '../interfaces/user';

@Injectable()
export class GithubapiService {
  private searchUsersUrl: string = 'https://api.github.com/search/users?q=';
  private searchQualifier: string = "+in:login&per_page=100";
  private headers: Headers = new Headers();

  private totalValue: number;
  public pageNumber: number;

  constructor(private http: Http) {
    this.pageNumber = 1;
  }

  getUsers(search: string, page: number): Observable<User[]> {
    this.pageNumber = page;
    let users = this.http
      .get(this.createUrl(search), {headers: this.getHeaders()})
      .map(mapUsers); //<- faster way, map result before return it
    return users;
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return headers;
  }

  createUrl(search):string {
    return this.searchUsersUrl + search + this.searchQualifier;
  }

  getTotalResults(search): Observable<number> {
    let total = this.http
    .get(this.createUrl(search), {headers: this.getHeaders()})
    .map((res: Response)=> res.json().total_count);
    return total;
  }

  // getSearcherResults(page: number, search: string): Observable<Users[]> {
  //   return this.http
  //   .get(this.createUrl(search), {headers: this.getHeaders()})
  //   .map((res: Response) => {});
  // }

  // getTypedPagedMilstones(page: number, pageSize: number): Observable<IPagedResponse<MileStoneModel>> {
  //       return this.http.get(this.url + "/" + "/" + pageSize)
  //           .map((res: Response) => {
  //               this.pageResponse.data = <MileStoneModel[]>res.json();
  //               this.pageResponse.total = res.json().Total;
  //           })
  //           .catch(this.handleError);
  //   }
}

function mapUsers(response: Response): User[] {
  var a = response.json().items.map(toUser);
  return a;
}

function toUser(userData: any) {
  let user = <User>({
    id: userData.id,
    login: userData.login,
    avatar_url: userData.avatar_url,
    url: userData.url,
    email: userData.email,
    followers: userData.followers
  });
  return user;
}
