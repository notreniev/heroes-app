import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
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
  success = false;
  finished = true;

  constructor(private heroesService: HeroesService) {

  }

  ngOnInit() {
    const hero = new HeroModel();
    hero.name = 'spider';

    this.searchHeroes(hero)
  }


  async searchHeroes(hero: HeroModel) {
    const res = await <any>this.heroesService
      .searchHeroes(hero.name)
      .toPromise();
    const { response, results } = res;
    this.success = response === 'success';
    this.finished = false;

    setTimeout(() => {
      this.heroes = results;
      console.log(res);
      this.finished = true;
    }, 1000);
  }

}
