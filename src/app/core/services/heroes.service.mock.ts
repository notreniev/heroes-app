import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { getHeroesMock } from '../domain/mock/hero.mock';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class HeroesServiceMock extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  searchHeroes(name: string): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      observer.next(getHeroesMock().filter(hero => hero.name.toLocaleLowerCase() === name.toLocaleLowerCase()));
      observer.complete();
    });
  }

}
