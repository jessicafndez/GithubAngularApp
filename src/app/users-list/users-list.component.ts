import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { GithubapiService } from '../services/githubapi.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Users } from '../interfaces/users';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {

  users: Users[] = [];

  public loading: boolean;
  //public total: number;
 // public page: number;
  public limit: number;

  public count: number = 100;
  public perPage: number;
  public pagesToShow: number;

  @Input() data: Users[];
  @Input() page;
  @Input() total;
  @Input() totalResults: number;

  constructor(private githubApi: GithubapiService) { }

  ngOnInit() {
    console.log("data....");
    console.log(this.data);
    this.loading = false;
    //this.total = 10;
    this.page = 1;
    this.limit = 20;
    this.pagesToShow = 100;

    console.log("Pages show: " + this.total);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Simple changes: ");
    console.log(changes.data);

  //  this.githubApi.getUsers('')
  }



}
