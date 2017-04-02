import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  @Input() skill;
  @Input() value;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      document.getElementById("progress-" + this.skill).style.width = this.value + "%";
    }, 0);
  }

}
