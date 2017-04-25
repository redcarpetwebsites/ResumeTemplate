import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thoughts',
  templateUrl: './thoughts.component.html',
  styleUrls: ['./thoughts.component.css']
})
export class ThoughtsComponent implements OnInit {
@Input () paragraph ;
@Input () author ; 
  constructor() { }

  ngOnInit() {
  }

}
