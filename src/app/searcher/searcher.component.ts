import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { GithubapiService } from '../services/githubapi.service';

//users list 
import { UsersListComponent } from '../users-list/users-list.component';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})


export class SearcherComponent implements OnInit {

  constructor(private githubApi: GithubapiService,
  private usersListComponent: UsersListComponent) { }

  ngOnInit() {

  }

  onSubmit(searcherForm: NgForm) {
    console.log("Form Submitted!");
    console.log(searcherForm.value.searchUser);
    var searchName = searcherForm.value.searchUser;
    
   // var searcherResults = this.githubApi.get(searchName);
    
  }

}
