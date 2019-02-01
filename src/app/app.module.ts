import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IssueService } from './issue.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OneFormComponent } from './one-form/one-form.component';
import { MultiFormComponent } from './multi-form/multi-form.component';
import { RandomComponent } from './random/random.component';
import { BottomComponent } from './bottom/bottom.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormGroupComponent } from './reactive-form-group/reactive-form-group.component';
import { AuthorsComponent } from './authors/authors.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OneFormComponent,
    MultiFormComponent,
    RandomComponent,
    BottomComponent,
    ReactiveFormComponent,
    ReactiveFormGroupComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
