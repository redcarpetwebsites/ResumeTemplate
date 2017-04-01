import { Component,OnInit } from '@angular/core';
import { InfoService } from './services/info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[InfoService]
})
export class AppComponent implements OnInit {
    header;
    social;
    profile;
    doings;
    thoughts;
    resume;
    interests;
    contact;
    
    constructor(private service : InfoService){
      
    }

    ngOnInit() {
      this.header = this.service.getHeader();
      this.social = this.service.getSocial();
      this.profile = this.service.getProfile();
      this.doings = this.service.getDoings();
      this.thoughts = this.service.getThoughts();
      this.resume = this.service.getResume();
      this.interests = this.service.getIntereset();
      this.contact = this.service.getContact();
    }


}
