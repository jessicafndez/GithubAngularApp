import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { GithubapiService } from '../services/githubapi.service';

//users list 
import { UsersListComponent } from '../users-list/users-list.component';
import { UsersComponent } from '../users/users.component';

//interfaces
import { User } from '../interfaces/user';
import { Users } from '../interfaces/users';
import { Subscriber } from 'rxjs/Subscriber';
import { Subscription } from 'rxjs/Subscription';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})


export class SearcherComponent implements OnInit {
 // users: User[];
 // userSearcher: Observer;
 users: User[] = [];
 // @Output() searchUsers =  new EventEmitter();

 userSearcher: Subscription<User[]>;


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

    // var a = this.githubApiService.getUsers(searchName)
    // .subscribe((users: User[]) => this.users = users);

    let a = this.githubApiService.getUsers(searchName);

    // this.githubApiService.getUsers(searchName)
    // .map((user: Array<any>) => {
    //   let result:Array<User> = [];
    //   if(user) {
    //     user.forEach((erg) => {
    //       result.push(new User(erg.login, erg.id, erg.avatar_url, erg.url, erg.email, erg.followers));
    //     });
    //   }
    //   return result; // <<<=== missing return
    // })
    // .subscribe(user => this.user = user);

    this.userSearcher = this.githubApiService.getUsers(searchName)
    .subscribe((users: User[]) => this.users = users)

     console.log(a);
    
   // var searcherResults = this.githubApi.get(searchName);
    
  }

}
