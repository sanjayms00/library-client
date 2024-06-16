import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constant } from '../../constants/constant';
import { Observable } from 'rxjs';
import { Book } from '../../interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private readonly http: HttpClient) {}

  bookDetailsById(id: string): Observable<Book> {
    return this.http.get<Book>(`${constant.baseUrl}book/detail/${id}`);
  }
}
