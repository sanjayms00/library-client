import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Author,
  AuthorData,
  CreateAuthor,
} from '../../interfaces/book.interface';
import { constant } from '../../constants/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private readonly http: HttpClient) {}

  getAuthors(pgNo = 0): Observable<Author> {
    return this.http.get<Author>(`${constant.baseUrl}author?pgNo=${pgNo}`);
  }

  //create author
  createAuthor(authorData: CreateAuthor): Observable<AuthorData[]> {
    return this.http.post<AuthorData[]>(
      `${constant.baseUrl}author/create`,
      authorData
    );
  }

  //update author
  updateAuthor(authorData: CreateAuthor): Observable<AuthorData[]> {
    return this.http.put<AuthorData[]>(
      `${constant.baseUrl}author/update`,
      authorData
    );
  }

  //delete book
  delete(_id: string) {
    return this.http.delete(`${constant.baseUrl}author/delete/${_id}`);
  }
}
