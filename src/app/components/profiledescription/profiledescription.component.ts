import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profiledescription',
  templateUrl: './profiledescription.component.html',
  styleUrls: ['./profiledescription.component.css']
})
export class ProfiledescriptionComponent implements OnInit {

  @Input() title;
  @Input() description1;
  @Input() description2;
  constructor() { }

  ngOnInit() {
  }

}
