import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageframe',
  templateUrl: './imageframe.component.html',
  styleUrls: ['./imageframe.component.css']
})
export class ImageframeComponent implements OnInit {
  throttle = 300;
  scrollDistance = 1;

  numArray = new Array(100);
  constructor() { }

  ngOnInit() {
  }

  onScrollDown (ev) {
    console.log('scrolled down!!', ev);
  }
}
