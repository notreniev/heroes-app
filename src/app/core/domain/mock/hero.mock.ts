import { v4 as uuidv4 } from 'uuid';
import { HeroModel } from "../model/hero.model";

export function getHeroesMock() {
    const heroes: HeroModel[] = [];
    const hero1 = new HeroModel();

    hero1.id = uuidv4();
    hero1.name = 'Spiderman';
    hero1.description = 'Friendly Neighborhood';

    const hero2 = new HeroModel();

    hero2.id = uuidv4();
    hero2.name = 'DareDevil';
    hero2.description = 'Blind Vigilante'

    const hero3 = new HeroModel();

    hero3.id = uuidv4();
    hero3.name = 'Iron Man';
    hero3.description = 'Genius, Biolionaire, Playboy, Philantropist...'

    heroes.push(hero1);
    heroes.push(hero2);
    heroes.push(hero3);

    return heroes;
}