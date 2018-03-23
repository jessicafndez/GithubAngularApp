import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { GithubapiService } from '../services/githubapi.service';

//users list 
//import { UsersListComponent } from '../users-list/users-list.component';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})


export class SearcherComponent implements OnInit {

  constructor(private githubApiService: GithubapiService) { }

  ngOnInit() {

  }

  onSubmit(searcherForm: NgForm) {
    console.log("Form Submitted!");
    console.log(searcherForm.value.searchUser);
    var searchName = searcherForm.value.searchUser;

    var a = this.githubApiService
      .get(searchName);

      console.log(a);
    
   // var searcherResults = this.githubApi.get(searchName);
    
  }

}
