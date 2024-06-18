import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthorData } from '../../interfaces/book.interface';
import { AuthorService } from '../../services/author/author.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrl: './author.component.css',
})
export class AuthorComponent implements OnInit, OnDestroy {
  pageNo = 0;
  count: number = 12;
  total: number = 0;
  authorList!: AuthorData[];
  fields = ['Name', 'biography', 'birthdate', 'Action'];
  getAuthorsSubscription!: Subscription;

  constructor(private readonly authorService: AuthorService) {}

  ngOnInit(): void {
    this.getAuthor(this.pageNo);
  }

  getAuthor(page: number) {
    this.getAuthorsSubscription = this.authorService
      .getAuthors(page)
      .subscribe({
        next: (res) => {
          this.authorList = res.author;
          this.total = res.total;
        },
        error: (err) => console.log(err),
      });
  }

  getPaginationEvent(event: number) {
    this.getAuthor(event);
    this.pageNo = event;
  }

  ngOnDestroy(): void {
    this.getAuthorsSubscription.unsubscribe();
  }
}
