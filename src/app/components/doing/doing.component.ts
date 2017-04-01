import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doing',
  templateUrl: './doing.component.html',
  styleUrls: ['./doing.component.css']
})
export class DoingComponent implements OnInit {

  constructor() { }
  @Input() doings;

  ngOnInit() {
  }

}
