import { Component, OnInit } from '@angular/core';
import { BookListService } from '../../services/bookList/book-list.service';
import { AllBook, Book } from '../../interfaces/book.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent implements OnInit {
  pageNo = 0;
  count: number = 12;
  bookList: AllBook = {
    allBooks: [],
    total: 0,
  };
  fields = ['Title', 'Description', 'Published Date', 'Author name', 'Action'];
  getBookSubscription!: Subscription;
  constructor(private readonly bookService: BookListService) {}

  ngOnInit(): void {
    this.getBook(this.pageNo);
  }

  getBook(page = 0) {
    this.getBookSubscription = this.bookService.getBook(page).subscribe({
      next: (res) => (this.bookList = res),
      error: (err) => console.log(err.message),
    });
  }

  getPaginationEvent(event: number) {
    this.getBook(event);
    this.pageNo = event;
  }

  ngOnDestroy(): void {
    this.getBookSubscription.unsubscribe();
  }
}
