import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constant } from '../../constants/constant';
import { Book } from '../../interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private readonly http: HttpClient) {}

  homeLoad(pgNo = 0): Observable<Book[]> {
    return this.http.get<Book[]>(`${constant.baseUrl}book?pgNo=${pgNo}`);
  }
}
