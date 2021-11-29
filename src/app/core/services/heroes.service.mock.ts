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
    const search = { response: 'success', results: getHeroesMock() };
    return new Observable((observer: Subscriber<any>) => {
      observer.next(search);
      observer.complete();
    });
  }

  getHeroById(id: number): Observable<any> {
    const search = { response: 'success', results: getHeroesMock() };
    return new Observable((observer: Subscriber<any>) => {
      observer.next(search);
      observer.complete();
    });
  }


}
