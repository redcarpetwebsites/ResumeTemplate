import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {
  @Input() facebookurl;
  @Input() linkedinkurl;
  @Input() googleplusurl;
  @Input() githuburl;
  @Input() twitterurl;

  constructor() { }

  ngOnInit() {
  }

}
