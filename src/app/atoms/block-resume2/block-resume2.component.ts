import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-resume2',
  templateUrl: './block-resume2.component.html',
  styleUrls: ['./block-resume2.component.css']
})
export class BlockResume2Component implements OnInit {

  @Input() work;
  idx: number;
  constructor() { }

  ngOnInit() {
    this.idx = 0;
  }

  right() {
    this.idx++;
    if (this.idx >= this.work.length) {
      this.idx = 0;
    }
  }
  left() {
    this.idx--;
    if (this.idx < 0) {
      this.idx = this.work.length - 1;
    }
  }

}
