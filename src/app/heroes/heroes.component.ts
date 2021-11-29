import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment';
import { OpenCloseComponent } from '../core/components/open-close/open-close.component';
import { HeroModel } from '../core/domain/model/hero.model';
import { HeroesService } from '../core/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  @Input() selectedHeroes: HeroModel[] = [];

  hero: HeroModel = new HeroModel();
  heroes: HeroModel[] = [];
  heroesSearched: HeroModel[] = [];
  success = false;
  finished = true;
  @ViewChild(OpenCloseComponent) openCloseComponent: OpenCloseComponent;

  powerstats = [
    { label: 'Inteligência', value: 'intelligence', checked: false },
    { label: 'Força', value: 'strength', checked: false },
    { label: 'Velocidade', value: 'speed', checked: false },
    { label: 'Durabilidade', value: 'durability', checked: false },
    { label: 'Poder', value: 'power', checked: false },
    { label: 'Combate', value: 'combat', checked: false }
  ];

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
  }

  async searchHeroes(hero: HeroModel) {
    this.heroes = [];
    const res = await <any>this.heroesService.searchHeroes(hero.name).toPromise();
    const { response, results } = res;
    this.success = response === 'success';
    this.finished = false;
    this.heroesSearched = results;

    setTimeout(() => {
      this.finished = true;
      this.heroes = results;
    }, 500);
  }

  async filterPowerStats(powerstat: any, checked?: boolean) {
    if (checked) {
      this.heroes = this.heroes.filter(hero => hero.powerstats[powerstat.value] !== 'null');
    } else {
      this.heroes = this.heroesSearched;
    }
  }

  resetForm() {
    this.heroes = [];
    this.hero = new HeroModel();
    this.powerstats.map((power: any) => power.checked = false);
    this.success = false;
    this.selectedHeroes = [];
    this.heroes.forEach(hero => hero.checked = false);

    if (this.openCloseComponent.isOpen) {
      this.openCloseComponent.toggle();
    }
  }

  closePanel(event: any) {
    this.selectedHeroes = [];
    this.heroes.forEach(hero => hero.checked = false);
  }

  resetCards(event: any) {
    this.heroes.forEach(hero => {
      if (hero.id === event.id) {
        hero.checked = false;
      }
    });

    if (this.selectedHeroes.length === 0) {
      if (this.openCloseComponent.getIsOpen()) {
        this.openCloseComponent.toggle();
      }
    }
  }

  updateSelected(event: any) {
    this.selectedHeroes = event;
  }
}
