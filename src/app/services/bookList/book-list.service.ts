import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constant } from '../../constants/constant';
import { Book } from '../../interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookListService {
  constructor(private readonly http: HttpClient) {}

  //get Book list
  getBook(pgNo = 0): Observable<{ allBooks: Book[]; total: number }> {
    return this.http.get<{ allBooks: Book[]; total: number }>(
      `${constant.baseUrl}book?pgNo=${pgNo}`
    );
  }
}
