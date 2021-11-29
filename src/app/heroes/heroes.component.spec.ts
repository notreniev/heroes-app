import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpenCloseModule } from '../core/components/open-close/open-close.module';

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
      ]
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
    // expect(compiled.querySelector('#searchForm .btn-primary')?.innerHTML).toBeTruthy();
    // console.log(compiled.querySelector('#searchForm button')?.getAttributeNames())
  });

});
