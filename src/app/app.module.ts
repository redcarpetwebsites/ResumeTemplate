import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { MenuModule } from './components/menu/menu.module';
import { ProfileModule } from './components/profile/profile.module';
import { SectionMenuModule} from './components/section-menu/section-menu.module';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeaderModule,
    MenuModule,
    ProfileModule,
    SectionMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
