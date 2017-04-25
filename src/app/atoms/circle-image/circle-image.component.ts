import { Component, OnInit , Input } from '@angular/core';
@Component({
  selector: 'app-circle-image',
  templateUrl: './circle-image.component.html',
  styleUrls: ['./circle-image.component.css']
})
export class CircleImageComponent implements OnInit {
@Input() image;
  constructor() { }

  ngOnInit() {
  }

}
