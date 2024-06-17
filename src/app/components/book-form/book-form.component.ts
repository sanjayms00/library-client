import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile/profile.service';
import { FilterService } from '../../services/filter/filter.service';
import { Authorlist } from '../../interfaces/filter.interface';
import { Subscription } from 'rxjs';
import { BookService } from '../../services/book/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css',
})
export class BookFormComponent implements OnInit, OnDestroy {
  initialData: any;
  bookForm!: FormGroup;
  authorList: Authorlist[] = [];
  getAuthorsSubscription!: Subscription;
  @Input() isEditMode = false;
  createBookSubscription!: Subscription;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private filterService: FilterService,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    //get the authorlist
    this.getAuthorsSubscription = this.filterService.getAuthors().subscribe({
      next: (res: Authorlist[]) => (this.authorList = res),
      error: (err) => console.log(err.message),
    });
    //get the initial formData
    this.initialData = this.profileService.intitialformData;

    //reactive form for book
    this.bookForm = this.fb.group({
      _id: [this.initialData?._id],
      title: [this.initialData?.title || '', Validators.required],
      description: [this.initialData?.description || '', Validators.required],
      publishedDate: [
        this.initialData?.publishedDate || '',
        Validators.required,
      ],
      authorId: [this.initialData?.authorId || '', Validators.required],
    });
  }

  onSubmit(): void {
    const { value } = this.bookForm;

    if (!this.isEditMode) {
      if (!this.bookForm.valid) {
        alert('Fill the form');
        return;
      }
      this.createBookSubscription = this.bookService
        .createBook(value)
        .subscribe({
          next: (res) => {
            alert('Book created successfully');
            this.profileService.setModalVisible(false);
          },
          error: (err) => console.log(err),
        });
    } else {
      this.createBookSubscription = this.bookService
        .updateBook(value)
        .subscribe({
          next: (res) => {
            alert('Book updated successfully');
            this.profileService.setModalVisible(false);
          },
          error: (err) => console.log(err),
        });
    }
  }

  ngOnDestroy(): void {
    this.getAuthorsSubscription.unsubscribe();
    if (this.createBookSubscription) {
      this.createBookSubscription.unsubscribe();
    }
  }
}
