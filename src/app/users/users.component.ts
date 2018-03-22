import { Component, OnInit } from '@angular/core';

//services
import { GithubapiService } from '../services/githubapi.service';

//interfaces
import { Users } from '../interfaces/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
