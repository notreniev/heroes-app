import { Component } from '@angular/core';
import { HeroModel } from './core/domain/model/hero.model';
import { HeroesService } from './heroes/heroes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hero: HeroModel = new HeroModel();
  title = 'hero-app';

  constructor(private heroesService: HeroesService) {

  }

  async searchHeroes(hero: HeroModel) {
    console.log(hero);
    const result = await this.heroesService
      .searchHeroes(hero.name)
      .toPromise();
    console.log(result);
  }
}
