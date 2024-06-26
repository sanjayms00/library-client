import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllBook, Book } from '../../interfaces/book.interface';
import { constant } from '../../constants/constant';
import { Authorlist, Filter } from '../../interfaces/filter.interface';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  constructor(private readonly http: HttpClient) {}

  //get authors
  getAuthors(): Observable<Authorlist[]> {
    return this.http.get<Authorlist[]>(`${constant.baseUrl}author/list`);
  }

  //filter book
  filter(filter: Filter): Observable<AllBook> {
    let params = new HttpParams();
    // Append each filter property to the params
    Object.entries(filter).forEach(([key, value]) => {
      if (value) {
        params = params.append(key, value);
      }
    });

    return this.http.get<AllBook>(`${constant.baseUrl}filter`, { params });
  }
}
