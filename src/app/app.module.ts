import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OneFormComponent } from './one-form/one-form.component';
import { MultiFormComponent } from './multi-form/multi-form.component';
import { RandomComponent } from './random/random.component';
import { BottomComponent } from './bottom/bottom.component';

import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OneFormComponent,
    MultiFormComponent,
    RandomComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
