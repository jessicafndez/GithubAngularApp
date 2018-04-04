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
    var searchName = searcherForm.value.searchUser;

    this.results = this.githubApiService.getUsers(searchName, this.page);

    this.githubApiService.getUsers(searchName, this.page).subscribe((users)=> {
      this.savedCurrentResults(users);
    });

    // this.githubApiService.getTotalResults(searchName).subscribe((value)=> {
    //   this.total = value;
    // });

    this.githubApiService.getTotalResults(searchName).subscribe((value) => {
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
    //recall endpoint
    console.log("go to page: " + this.page);
    this.githubApiService.getUsers(searchName, this.page).subscribe((users)=> {
      this.savedCurrentResults(users);
    });
  }

  onPrev(): void {
    this.page--;
    //recall endpoint

  }



}
