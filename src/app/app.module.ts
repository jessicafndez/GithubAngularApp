import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersServiceService } from './services/users.service';
import { SearcherComponent } from './searcher/searcher.component';
import { GithubapiService } from './services/githubapi.service';
import { UsersListComponent } from './users-list/users-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SearcherComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,         // <-- add this  
    ReactiveFormsModule 
  ],
  providers: [GithubapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
