import { Component, OnInit } from '@angular/core';
import { BookListService } from '../../services/bookList/book-list.service';
import { Book } from '../../interfaces/book.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent implements OnInit {
  bookList: Book[] = [];
  fields = ['Title', 'Description', 'Published Date', 'Author name', 'Action'];
  getBookSubscription!: Subscription;
  constructor(private readonly bookService: BookListService) {}

  ngOnInit(): void {
    this.getBookSubscription = this.bookService.getBook().subscribe({
      next: (res) => (this.bookList = res),
      error: (err) => console.log(err.message),
    });
  }

  ngOnDestroy(): void {
    this.getBookSubscription.unsubscribe();
  }
}
