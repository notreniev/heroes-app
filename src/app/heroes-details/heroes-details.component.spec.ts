import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { HeroesDetailsComponent } from './heroes-details.component';

describe('HeroesDetailsComponent', () => {
  let component: HeroesDetailsComponent;
  let fixture: ComponentFixture<HeroesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HeroesDetailsComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { params: { id: 123 } } } },
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
});
