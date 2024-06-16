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
  authorList: AuthorData[] = [];
  fields = ['Name', 'biography', 'birthdate', 'Action'];
  getAuthorsSubscription!: Subscription;

  constructor(private readonly authorService: AuthorService) {}

  ngOnInit(): void {
    this.getAuthorsSubscription = this.authorService.getAuthors().subscribe({
      next: (res) => (this.authorList = res),
      error: (err) => console.log(err),
    });
  }

  ngOnDestroy(): void {
    this.getAuthorsSubscription.unsubscribe();
  }
}
