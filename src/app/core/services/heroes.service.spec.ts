import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeroesService } from './heroes.service';
import { HeroesServiceMock } from './heroes.service.mock';

describe('HeroesService', () => {
  let service: HeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HeroesService, useClass: HeroesServiceMock }
      ]
    });
    service = TestBed.inject(HeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getHeroes method to be thruthy', () => {
    expect(service.searchHeroes).toBeTruthy();
  });

  it('should retrieve a list of heroes', async () => {
    const searched = await service.searchHeroes('spiderman').toPromise();
    expect(searched).toBeDefined();
  });

});
