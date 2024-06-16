import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home/home.service';
import { Book } from '../../interfaces/book.interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  pageNo = 0;
  book!: Observable<Book[]>;

  constructor(
    private readonly homeService: HomeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.book = this.homeService.homeLoad(this.pageNo);
  }

  getCardEventId(id: string) {
    this.router.navigate(['book', id]);
  }
}
