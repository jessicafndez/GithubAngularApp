import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
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
    FormsModule,         
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [GithubapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
