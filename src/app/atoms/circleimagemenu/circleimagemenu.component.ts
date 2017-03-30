import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circleimagemenu',
  templateUrl: './circleimagemenu.component.html',
  styleUrls: ['./circleimagemenu.component.css']
})
export class CircleimagemenuComponent implements OnInit {
@Input() text;
  constructor() { }

  ngOnInit() {
  }

}
