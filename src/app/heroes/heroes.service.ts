import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HeroModel } from '../core/domain/model/hero.model';
import { catchError } from 'rxjs/operators';
import { BaseService } from '../core/base.service';

@Injectable({
  providedIn: 'root'
})
export class HeroesService extends BaseService {

  constructor(
    private httpClient: HttpClient
  ) {
    super();
  }

  searchHeroes(name: string): Observable<HeroModel> {
    return this.httpClient
      .get<HeroModel>(`/api/search/${name}`, this.httpOptions())
      .pipe(catchError(this.handleError));
  }
}
