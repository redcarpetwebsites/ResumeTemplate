import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-resume',
  templateUrl: './block-resume.component.html',
  styleUrls: ['./block-resume.component.css']
})
export class BlockResumeComponent implements OnInit {


  @Input() education;
  idx: number;
  constructor() { }

  ngOnInit() {
    this.idx = 0;
  }

  right() {
    this.idx++;
    if (this.idx >= this.education.length) {
      this.idx = 0;
    }
  }
  left() {
    this.idx--;
    if (this.idx < 0) {
      this.idx = this.education.length-1;
    }
  }
}
