import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-circle-icon',
  templateUrl: './circle-icon.component.html',
  styleUrls: ['./circle-icon.component.css']
})
export class CircleIconComponent implements OnInit {
@Input () icon ;
@Input () text;
  constructor() { }

  ngOnInit() {
  }

}
