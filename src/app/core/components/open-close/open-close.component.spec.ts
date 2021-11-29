import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { getHeroesMock } from '../../domain/mock/hero.mock';

import { OpenCloseComponent } from './open-close.component';

describe('OpenCloseComponent', () => {
  let component: OpenCloseComponent;
  let fixture: ComponentFixture<OpenCloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [OpenCloseComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test if one hero is removed', () => {
    const mock = getHeroesMock();
    component.heroes = mock;
    component.remove(component.heroes[0]);

    expect(component.heroes.length).toBe(2);
  });
});
