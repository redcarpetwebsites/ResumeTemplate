import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text;
  @Output() clicks: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clicked(){
    this.clicks.emit(null);
  }

}
