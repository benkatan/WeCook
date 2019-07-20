import { Component, OnInit, Input } from '@angular/core';
import { initDomAdapter } from '@angular/platform-browser/src/browser';

@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss']
})
export class BasicCardComponent implements OnInit {

  @Input() title;
  @Input() description;
  @Input() imgUrl;
  
  constructor() { }

  ngOnInit() {
  }

}
