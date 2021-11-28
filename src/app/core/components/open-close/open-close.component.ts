import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { HeroModel } from '../../domain/model/hero.model';

@Component({
  selector: 'app-open-close',
  animations: [
    trigger('openClose', [
      state('open', style({
        width: '500px',
        // height: '94vh',
        opacity: 1,
        display: 'visible'
      })),
      state('closed', style({
        width: '0',
        // height: '0px',
        opacity: 0,
        display: 'none'
      })),
      transition('open => closed', animate('100ms ease-out')),
      transition('closed => open', animate('100ms ease-in'))
    ]),
  ],
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css']
})
export class OpenCloseComponent implements OnInit {
  @Input() heroes: HeroModel[] = [];
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit(): void {
    console.log('this.hero', this.heroes);
  }

}
