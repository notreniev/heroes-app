import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { getHeroesMock } from '../core/domain/mock/hero.mock';
import { HeroesService } from '../core/services/heroes.service';
import { HeroesServiceMock } from '../core/services/heroes.service.mock';

import { HeroesDetailsComponent } from './heroes-details.component';

describe('HeroesDetailsComponent', () => {
  let component: HeroesDetailsComponent;
  let fixture: ComponentFixture<HeroesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HeroesDetailsComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { params: { id: '12345678' } } } },
        { provide: HeroesService, useClass: HeroesServiceMock }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test loadHero by id', async () => {
    component.hero = getHeroesMock()[0];
    spyOn(component, 'loadHero').and.callThrough();
    await component.loadHero();

    expect(component.success).toBe(true);
  });
});
