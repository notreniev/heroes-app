import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpenCloseModule } from '../core/components/open-close/open-close.module';
import { getHeroesMock } from '../core/domain/mock/hero.mock';
import { HeroesService } from '../core/services/heroes.service';
import { HeroesServiceMock } from '../core/services/heroes.service.mock';

import { HeroesComponent } from './heroes.component';

describe('HomeComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        OpenCloseModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: HeroesService, useClass: HeroesServiceMock }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test search form layout', () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.form-control')?.getAttribute('placeholder')).toContain('Digite o nome do herói');
    expect(compiled.querySelector('#searchForm .btn')?.getAttribute('type')).toBe('button');
    expect(compiled.querySelector('#searchForm .btn-primary')?.textContent).toBe('Buscar');
  });

  it('should search a hero', async () => {
    const mock = getHeroesMock();
    const spyTimeout = spyOn(window, 'setTimeout');
    fixture.detectChanges();

    await component.searchHeroes(mock[0]);
    fixture.detectChanges();

    expect(spyTimeout).toHaveBeenCalled();
    expect(component.heroesSearched[0].name).toEqual(mock[0].name);
  });

  it('should test filter powerstats', async () => {
    component.heroes = getHeroesMock();
    await component.filterPowerStats(component.powerstats[0], true);
    fixture.detectChanges();

    expect(component.heroes[0].powerstats).toBeTruthy();

    await component.filterPowerStats(component.powerstats[0], false);
    fixture.detectChanges();

    expect(component.heroes[0]?.powerstats).toBeFalsy();
  });

  it('should test reset form', () => {
    component.heroes = getHeroesMock();
    component.resetForm();

    expect(component.heroes.length).toBe(0);
  });

  it('should teste close panel', () => {
    const mock = getHeroesMock();
    component.closePanel(mock);

    expect(component.selectedHeroes.length).toBe(0);
  });

  it('should reset cards', () => {
    component.heroes = getHeroesMock();
    component.resetCards(getHeroesMock()[0]);
    fixture.detectChanges();

    expect(component.heroes.every(hero => hero.checked == false)).toBe(true);
  });
});
