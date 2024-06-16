import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorData } from '../../interfaces/book.interface';
import { constant } from '../../constants/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private readonly http: HttpClient) {}

  getAuthors(): Observable<AuthorData[]> {
    return this.http.get<AuthorData[]>(`${constant.baseUrl}author`);
  }
}
