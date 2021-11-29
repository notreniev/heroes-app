import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeroModel } from '../../domain/model/hero.model';
import { OpenCloseComponent } from '../open-close/open-close.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() hero: HeroModel = new HeroModel();
  @Input() heroes: HeroModel[] = [];
  @Input() openCloseComponent: OpenCloseComponent;
  @Output() updateSelectedHeroes: EventEmitter<HeroModel[]> = new EventEmitter<HeroModel[]>();
  @Input() details = false;

  selectedHeroes: HeroModel[] = [];

  constructor() { }


  selectHeroes(hero: HeroModel, checked: boolean) {

    const indexOf = this.selectedHeroes.indexOf(hero);

    if (checked) {
      if (this.selectedHeroes.length < 2) {
        hero.checked = checked;
        this.selectedHeroes.push(hero);
        this.updateSelectedHeroes.emit(this.selectedHeroes);
      }
    } else {
      hero.checked = false;
      this.selectedHeroes.splice(indexOf, 1);
      this.updateSelectedHeroes.emit(this.selectedHeroes);
    }

    if (this.selectedHeroes.length === 2) {
      if (!this.openCloseComponent.getIsOpen()) {
        this.openCloseComponent.toggle();
      }
    }

    if (this.selectedHeroes.length === 0) {
      if (this.openCloseComponent.getIsOpen()) {
        this.openCloseComponent.toggle();
      }
    }
  }

  ngOnInit(): void {
  }

  resetCards(event: any) {
    this.heroes.forEach(hero => {
      if (hero.id === event.id) {
        hero.checked = false;
      }
    });

    if (this.selectedHeroes.length === 0) {
      if (this.openCloseComponent.isOpen) {
        this.openCloseComponent.toggle();
      }
    }
  }

}
