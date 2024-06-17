import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constant } from '../../constants/constant';
import { Observable } from 'rxjs';
import { Book, CreateBook } from '../../interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private readonly http: HttpClient) {}

  //get book details by id
  bookDetailsById(id: string): Observable<Book> {
    return this.http.get<Book>(`${constant.baseUrl}book/detail/${id}`);
  }

  //create Book
  createBook(BookData: CreateBook): Observable<Book[]> {
    return this.http.post<Book[]>(`${constant.baseUrl}book/create`, BookData);
  }

  //update Book
  updateBook(BookData: CreateBook): Observable<Book[]> {
    return this.http.put<Book[]>(`${constant.baseUrl}book/update`, BookData);
  }

  //delete book
  delete(_id: string) {
    return this.http.delete(`${constant.baseUrl}book/delete/${_id}`);
  }
}
