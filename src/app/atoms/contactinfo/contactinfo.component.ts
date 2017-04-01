import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-contactinfo',
  templateUrl: './contactinfo.component.html',
  styleUrls: ['./contactinfo.component.css']
})
export class ContactinfoComponent implements OnInit {
@Input () address;
@Input () phone;
@Input () mail;
@Input () website;
  constructor() { }

  ngOnInit() {
  }

}
