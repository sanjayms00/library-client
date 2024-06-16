import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book/book.service';
import { Book } from '../../interfaces/book.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent implements OnInit, OnDestroy {
  id!: string;
  bookData!: Book;
  bookSubscription!: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly bookService: BookService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    if (!this.id) {
      this.router.navigate(['home']);
      return;
    }

    this.getBookDetails();
  }

  getBookDetails() {
    this.bookSubscription = this.bookService
      .bookDetailsById(this.id)
      .subscribe({
        next: (res) => (this.bookData = res),
        error: (err) => console.log(err.message),
      });
  }

  ngOnDestroy(): void {
    this.bookSubscription.unsubscribe();
  }
}
