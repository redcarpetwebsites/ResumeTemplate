import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-block-resume2',
  templateUrl: './block-resume2.component.html',
  styleUrls: ['./block-resume2.component.css']
})
export class BlockResume2Component implements OnInit {
@Input () compagny;
@Input () address;
@Input () period;
@Input () post;
@Input () paragraph;
  constructor() { }

  ngOnInit() {
  }

}
