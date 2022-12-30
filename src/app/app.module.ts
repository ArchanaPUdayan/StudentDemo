import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudententryComponent } from './studententry/studententry.component';
import { ViewallComponent } from './viewall/viewall.component';

const myRoute:Routes=[
  {
    path:"",
    component:StudententryComponent
  },
  {
    path:"view",
    component:ViewallComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    StudententryComponent,
    ViewallComponent
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
