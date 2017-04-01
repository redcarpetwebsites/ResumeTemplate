import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { MenuModule } from './components/menu/menu.module';
import { ProfileModule } from './components/profile/profile.module';
import { SectionMenuModule} from './components/section-menu/section-menu.module';
import { DoingComponent } from './components/doing/doing.component';
import { ThoughtsComponent } from './components/thoughts/thoughts.component';
import { ResumeComponent } from './components/resume/resume.component';
import { InterestsComponent } from './components/interests/interests.component';
import { ContactComponent } from './components/contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    DoingComponent,
    ThoughtsComponent,
    ResumeComponent,
    InterestsComponent,
    ContactComponent,

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
