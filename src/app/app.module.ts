import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import {HeaderModule} from './components/header/header.module';
import {MenuModule} from './components/menu/Menu.module';
import { HeaderTitleComponent } from './atoms/header-title/header-title.component';
import { ButtonComponent } from './atoms/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTitleComponent,
    ButtonComponent,
    



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeaderModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
