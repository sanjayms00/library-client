import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constant } from '../../constants/constant';
import { AllBook, Book } from '../../interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookListService {
  constructor(private readonly http: HttpClient) {}

  //get Book list
  getBook(pgNo = 0): Observable<AllBook> {
    return this.http.get<AllBook>(`${constant.baseUrl}book?pgNo=${pgNo}`);
  }
}
