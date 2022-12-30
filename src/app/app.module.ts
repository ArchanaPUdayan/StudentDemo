import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudententryComponent } from './studententry/studententry.component';
import { ViewAllpaComponent } from './view-allpa/view-allpa.component';
import { SearchComponent } from './search/search.component';

const myRoute:Routes=[
  {
    path:"",
    component:StudententryComponent
  },
  {
    path:"view",
    component:ViewAllpaComponent
  },
  {
    path:"search",
    component: SearchComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    StudententryComponent,
    ViewAllpaComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
