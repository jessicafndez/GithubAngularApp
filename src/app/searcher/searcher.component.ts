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
  userString: string;
  subscription: Subscription;

  private results: Observable<User[]>;
  private totalResults: number;
  private resultsPerPage: number;

  private currentSearchString: string;

  private saveResults: User[] = [];

  //pagination
  loading = false;
 // public total:number;
  public page = 1;
  limit: number;
  total: number;

  constructor(private githubApiService: GithubapiService) { }

  ngOnInit() {
    this.resultsPerPage = 100;
  }

  onSubmit(searcherForm: NgForm) {
    console.log("Form Submitted!");
    console.log(searcherForm.value.searchUser);
    this.currentSearchString = searcherForm.value.searchUser;

    this.githubApiService.getUsers(this.currentSearchString, this.page)
    .subscribe((users)=> {
      this.savedCurrentResults(users);
      this.users = users;
    });

    this.githubApiService.getTotalResults(this.currentSearchString).subscribe((value) => {
      this.totalResults = value;
      this.resultsPerPage = this.getPagesToShow(value);
      this.limit = 100;
      this.total = value;
      // this.total = value;
      // this.limit = this.resultsPerPage;
    });

    console.log("results: ");
    console.log(this.totalResults);
    console.log("---");
  }

  savedCurrentResults(results: Users[]) {
    console.log("Saving current values...");
    console.log(results);
    for(let i in results) {
      this.saveResults.push(results[i]);
    }
  }

  //in saved array
  callForPage() {

  }

  getPagesToShow(totalResults: number) {
    return totalResults/this.resultsPerPage;
  }

  //method to new request
  goToPage(n: number): void {
    this.page = n;
    console.log("go to page: " + n);
    //recall endpoint
  }

  onNext(): void {
    this.page++;
    console.log("Go to page: " + this.page);

    //recall endpoint
    this.githubApiService.getUsers(this.currentSearchString, this.page)
    .subscribe((users)=> {
      this.savedCurrentResults(users);
      this.users = users;
      console.log("actual users: ");
      console.log(this.users);
    });
    console.log("blahhh");
  }

  onPrev(): void {
    this.page--;
    //recall endpoint

  }



}
