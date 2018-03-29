import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

import { GithubapiService } from '../services/githubapi.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

//interface, just if needed
import { Users } from '../interfaces/users';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {

  users: Users[] = [];

  @Input() data: Subscriber<Users[]>;

  constructor(private githubApi: GithubapiService) { }

  ngOnInit() {
    console.log("data....");
    console.log(this.data);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Simple changes: ");
    console.log(changes.data.currentValue);

  //  this.githubApi.getUsers('')
  }



}
