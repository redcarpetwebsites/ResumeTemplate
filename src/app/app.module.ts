import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { MenuModule } from './components/menu/menu.module';
import { ProfileModule } from './components/profile/profile.module';
import { DoingModule } from './components/doing/doing.module';
import { ThoughtsModule } from './components/thoughts/thoughts.module';
import { ResumeModule } from './components/resume/resume.module';
import { InterestsModule } from './components/interests/interests.module';
import { ContactModule } from './components/contact/contact.module';
import { SkillsModule } from './components/skills/skills.module';
import { FooterModule } from './components/footer/footer.module';
import { ExperienceModule } from './components/experience/experience.module';


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
    DoingModule,
    ThoughtsModule,
    ResumeModule,
    InterestsModule,
    ContactModule,
    SkillsModule,
    FooterModule,
    ExperienceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
