import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
@Input () skill;
@Input () number ;
// @Input () width ;
  constructor() { }

  ngOnInit() {
  }

}
