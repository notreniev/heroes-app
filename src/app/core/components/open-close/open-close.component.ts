import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
        opacity: 1,
        display: 'visible'
      })),
      state('closed', style({
        width: '0',
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
  // updateSelectedHeroes: HeroModel[] = [];

  @Output() updatePanel: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() removedCard: EventEmitter<HeroModel> = new EventEmitter<HeroModel>();

  isOpen = false;
  details = true;

  getIsOpen() {
    return this.isOpen;
  }

  toggle() {
    this.isOpen = !this.isOpen;

    if (!this.isOpen) {
      this.updatePanel.emit(!this.isOpen);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  remove(hero: HeroModel) {
    const indexOf = this.heroes.findIndex(heroObj => heroObj.id === hero.id);
    this.heroes.splice(indexOf, 1);
    this.removedCard.emit(hero);
  }

  // updateSelected() {
  //   this.updateSelectedHeroes = this.heroes;
  // }

}
