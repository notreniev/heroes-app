import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientTestingModule, FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'hero-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('hero-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#heroes')?.textContent).toContain('Heróis App');
  });

  it('should test search form layout', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.form-control')?.getAttribute('placeholder')).toContain('Digite o nome do herói');
    expect(compiled.querySelector('#searchForm .btn')?.getAttribute('type')).toBe('button');
    expect(compiled.querySelector('#searchForm .btn-primary')?.textContent).toBe('Buscar');
    // expect(compiled.querySelector('#searchForm .btn-primary')?.innerHTML).toBeTruthy();
    // console.log(compiled.querySelector('#searchForm button')?.getAttributeNames())
  });

});
