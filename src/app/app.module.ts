import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { SearcherComponent } from './searcher/searcher.component';
import { GithubapiService } from './services/githubapi.service';
import { UsersListComponent } from './users-list/users-list.component';
import { PaginatorComponent } from './paginator/paginator.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SearcherComponent,
    UsersListComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,         
    ReactiveFormsModule,
    HttpModule,
    NgxPaginationModule
  ],
  providers: [GithubapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
