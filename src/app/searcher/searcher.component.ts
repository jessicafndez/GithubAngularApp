import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { GithubapiService } from '../services/githubapi.service';

//users list 
import { UsersListComponent } from '../users-list/users-list.component';
import { UsersComponent } from '../users/users.component';

//interfaces
import { User } from '../interfaces/user';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})


export class SearcherComponent implements OnInit {
  users: User[];
 // user: User;

  constructor(private githubApiService: GithubapiService) { }

  ngOnInit() {

  }

  onSubmit(searcherForm: NgForm) {
    console.log("Form Submitted!");
    console.log(searcherForm.value.searchUser);
    var searchName = searcherForm.value.searchUser;

    // this.githubApiService.get(searchName)
    // .subscribe((user)=>{this.users=user});

    var a = this.githubApiService.getUsers(searchName)
    .subscribe((users: User[]) => this.users = users);


     console.log(a);
     console.log(this.users);
    
   // var searcherResults = this.githubApi.get(searchName);
    
  }

}
