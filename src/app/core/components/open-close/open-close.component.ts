import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-open-close',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '94vh',
        opacity: 1,
        display: 'visible'
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
        display: 'none'
      })),
      transition('open => closed', animate('60ms ease-out')),
      transition('closed => open', animate('100ms ease-in'))
    ]),
  ],
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css']
})
export class OpenCloseComponent implements OnInit {
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
