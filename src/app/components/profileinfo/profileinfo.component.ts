import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profileinfo',
  templateUrl: './profileinfo.component.html',
  styleUrls: ['./profileinfo.component.css']
})
export class ProfileinfoComponent implements OnInit {
@Input () name;
@Input () dateofbirth;
@Input () mail;
@Input () address;
@Input () phone;
  constructor() { }

  ngOnInit() {
  }

}
