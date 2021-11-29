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

  name: string;
  fullName: string;
  alterEgos: string;
  aliases: string[];
  placeOfBirth: string;
  firstAppearance: string;
  publisher: string;
  alignment: string;

  gender: string;
  race: string;
  height: string[];
  weight: string[];
  eyeColor: string;
  hairColor: string;

  work: string;
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

    this.name = this.hero.name;

    const {
      "full-name": fullName,
      "alter-egos": alterEgos,
      aliases,
      "place-of-birth": placeOfBirth,
      "first-appearance": firstAppearance,
      publisher,
      alignment

    } = this.hero.biography;

    this.fullName = fullName;
    this.alterEgos = alterEgos;
    this.aliases = aliases;
    this.placeOfBirth = placeOfBirth;
    this.firstAppearance = firstAppearance;
    this.publisher = publisher;
    this.alignment = alignment;

    const {
      gender,
      race,
      height,
      weight,
      "eye-color": eyeColor,
      "hair-color": hairColor
    } = this.hero.appearance;

    this.gender = gender;
    this.race = race;
    this.height = height;
    this.weight = weight;
    this.eyeColor = eyeColor;
    this.hairColor = hairColor;

    this.work = this.hero.work.occupation;
  }
}
