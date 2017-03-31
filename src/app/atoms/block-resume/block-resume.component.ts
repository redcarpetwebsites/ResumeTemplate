import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-resume',
  templateUrl: './block-resume.component.html',
  styleUrls: ['./block-resume.component.css']
})
export class BlockResumeComponent implements OnInit {
@Input () name;
@Input () address;
@Input () period;
@Input () level;
@Input () paragraph;

  constructor() { }

  ngOnInit() {
  }

}
