import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile/profile.service';
import { FilterService } from '../../services/filter/filter.service';
import { Authorlist } from '../../interfaces/filter.interface';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css',
})
export class BookFormComponent {
  initialData: any;
  bookForm!: FormGroup;
  authorList: Authorlist[] = [];

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    //get the authorlist
    this.filterService.getAuthors().subscribe({
      next: (res: Authorlist[]) => (this.authorList = res),
      error: (err) => console.log(err.message),
    });
    //get the initial formData
    this.initialData = this.profileService.intitialformData;

    //reactive form for book
    this.bookForm = this.fb.group({
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
    console.log(this.bookForm.value);
    // Handle form submission logic
  }
}
