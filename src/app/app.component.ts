import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { OpenCloseComponent } from './core/components/open-close/open-close.component';
import { HeroModel } from './core/domain/model/hero.model';
import { HeroesService } from './heroes/heroes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hero-app';
  hero: HeroModel = new HeroModel();
  heroes: HeroModel[] = [];
  heroesImmutable: HeroModel[] = [];
  success = false;
  finished = true;
  isChecked: any;
  powerstats = [
    { label: 'Inteligência', value: 'intelligence', checked: false },
    { label: 'Força', value: 'strength', checked: false },
    { label: 'Velocidade', value: 'speed', checked: false },
    { label: 'Durabilidade', value: 'durability', checked: false },
    { label: 'Poder', value: 'power', checked: false },
    { label: 'Combate', value: 'combat', checked: false }
  ];

  selectedHeroes: HeroModel[] = [];

  @ViewChild(OpenCloseComponent) openCloseComponent: OpenCloseComponent;

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.hero.name = 'spider';
    this.searchHeroes(this.hero);
  }

  async searchHeroes(hero: HeroModel) {
    this.heroes = [];
    const res = await <any>this.heroesService.searchHeroes(hero.name).toPromise();
    const { response, results } = res;
    this.success = response === 'success';
    this.finished = false;
    this.heroesImmutable = results;

    setTimeout(() => {
      console.log(res);
      this.finished = true;
      this.heroes = results;
    }, 1000);
  }

  selectHeroes(hero: HeroModel, checked: boolean) {

    const indexOf = this.selectedHeroes.indexOf(hero);

    if (checked) {
      if (this.selectedHeroes.length < 2) {
        hero.checked = checked;
        this.selectedHeroes.push(hero);
      }
    } else {
      hero.checked = false;
      this.selectedHeroes.splice(indexOf, 1);
    }

    if (this.selectedHeroes.length === 2) {
      if (!this.openCloseComponent.isOpen) {
        this.openCloseComponent.toggle();
      }
    }

    if (this.selectedHeroes.length === 0) {
      if (this.openCloseComponent.isOpen) {
        this.openCloseComponent.toggle();
      }
    }

  }

  async filterPowerStats(powerstat: any, checked?: boolean) {
    if (checked) {
      this.heroes = this.heroes.filter(hero => hero.powerstats[powerstat.value] !== 'null');
      this.heroes.map(hero => console.log(powerstat.value, hero.powerstats[powerstat.value]));
    } else {
      this.heroes = this.heroesImmutable;
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
      if (this.openCloseComponent.isOpen) {
        this.openCloseComponent.toggle();
      }
    }
  }
}
