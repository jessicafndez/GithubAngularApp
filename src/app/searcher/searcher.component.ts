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
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})


export class SearcherComponent implements OnInit {
  users: User[] = [];
  subscription: Subscription;

  private results: Observable<User[]>;
  private totalResults: number;
  private resultsPerPage: number;

  constructor(private githubApiService: GithubapiService) { }

  ngOnInit() {
  }

  onSubmit(searcherForm: NgForm) {
    console.log("Form Submitted!");
    console.log(searcherForm.value.searchUser);
    var searchName = searcherForm.value.searchUser;

    this.results = this.githubApiService.getUsers(searchName);
    let a = this.githubApiService.getTotalResults(searchName).subscribe(r=>this.totalResults = r);

    this.githubApiService.getTotalResults(searchName).subscribe((value) => {
      this.totalResults = value;
      this.resultsPerPage = this.getPagesToShow(value);
    });


    console.log("results: ");
    console.log(this.totalResults);
    console.log("---");
  }

  getPagesToShow(totalResults: number) {
    return totalResults/this.resultsPerPage;
  }


}
