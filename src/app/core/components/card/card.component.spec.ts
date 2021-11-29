import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { getHeroesMock } from '../../domain/mock/hero.mock';
import { OpenCloseComponent } from '../open-close/open-close.component';
import { OpenCloseModule } from '../open-close/open-close.module';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenCloseModule, FormsModule],
      declarations: [CardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select a hero and add it to selectedHeroes', () => {
    const mock = getHeroesMock();
    component.selectHeroes(mock[0], true);

    fixture.detectChanges();

    expect(component.selectedHeroes.length).toBeGreaterThan(0);
  });

  it('should remove a hero of selectedHeroes if checked is false', () => {
    const mock = getHeroesMock();
    component.openCloseComponent = new OpenCloseComponent();
    component.selectHeroes(mock[0], true);

    fixture.detectChanges();

    const spyProperty = spyOn(component.openCloseComponent, 'getIsOpen');
    component.selectHeroes(mock[0], false);
    fixture.detectChanges();

    expect(component.selectedHeroes.length).toBe(0);
    expect(spyProperty).toHaveBeenCalled();
  });

  it('should remove two heroes of selectedHeroes if checked is false', () => {
    const mock = getHeroesMock();
    component.openCloseComponent = new OpenCloseComponent();
    component.selectHeroes(mock[0], true);
    component.selectHeroes(mock[1], true);

    fixture.detectChanges();

    const spyProperty = spyOn(component.openCloseComponent, 'getIsOpen');
    component.selectHeroes(mock[0], false);
    component.selectHeroes(mock[1], false);
    fixture.detectChanges();


    expect(component.selectedHeroes.length).toBe(0);
    expect(spyProperty).toHaveBeenCalled();
  });

  it('should test if panel is opened', () => {
    const mock = getHeroesMock();
    component.openCloseComponent = new OpenCloseComponent();
    component.selectHeroes(mock[0], true);
    component.selectHeroes(mock[1], true);

    fixture.detectChanges();

    const spyProperty = spyOn(component.openCloseComponent, 'toggle').and.callThrough();
    component.selectHeroes(mock[0], false);
    component.selectHeroes(mock[1], false);

    expect(spyProperty).toHaveBeenCalled();
  });

  it('should reset cards collection', () => {
    const mock = getHeroesMock();
    component.openCloseComponent = new OpenCloseComponent();

    spyOn(component.openCloseComponent, 'getIsOpen');
    fixture.detectChanges();

    component.resetCards(mock);

    expect(component.heroes.length).toBe(0);
  });
});
