import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import{CircleImageModule} from './atoms/circle-image/circle-image.module';
import {HeaderModule} from './components/header/header.module';
import {MenuModule} from './components/menu/Menu.module';
import { ProfileModule } from './components/profile/profile.module';


@NgModule({
  declarations: [
    AppComponent



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CircleImageModule,
    HeaderModule,
    MenuModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
