import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroModel } from '../core/domain/model/hero.model';
import { HeroesService } from '../core/services/heroes.service';

@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.css']
})
export class HeroesDetailsComponent implements OnInit {

  hero: HeroModel = new HeroModel();
  powerstats: any;
  success: boolean = false;

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute) {
    this.hero = new HeroModel();
  }

  ngOnInit(): void {
    this.loadHero();
  }

  async loadHero() {
    const { id } = this.activatedRoute.snapshot.params;
    this.hero = await this.heroesService.getHeroById(id).toPromise();
    this.success = this.hero.response === 'success';
    this.powerstats = Array.of(this.hero.powerstats);
  }
}
