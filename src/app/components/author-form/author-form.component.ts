import { Component, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthorData } from '../../interfaces/book.interface';
import { ProfileService } from '../../services/profile/profile.service';
import { AuthorService } from '../../services/author/author.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrl: './author-form.component.css',
})
export class AuthorFormComponent implements OnDestroy {
  @Input() initialData!: AuthorData;
  authorForm!: FormGroup;
  createAuthorSubscription!: Subscription;
  @Input() isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private authorService: AuthorService
  ) {}

  ngOnInit(): void {
    this.initialData = this.profileService.intitialformData;
    this.authorForm = this.fb.group({
      _id: [this.initialData?._id],
      name: [this.initialData?.name || '', Validators.required],
      biography: [this.initialData?.biography || '', Validators.required],
      birthdate: [this.initialData?.birthdate || '', Validators.required],
    });
  }

  onSubmit(): void {
    const { value } = this.authorForm;

    if (!this.isEditMode) {
      if (!this.authorForm.valid) {
        alert('Fill the form');
        return;
      }
      this.createAuthorSubscription = this.authorService
        .createAuthor(value)
        .subscribe({
          next: (res) => {
            alert('Author created successfully');
            this.profileService.setModalVisible(false);
          },
          error: (err) => console.log(err),
        });
    } else {
      this.createAuthorSubscription = this.authorService
        .updateAuthor(value)
        .subscribe({
          next: (res) => {
            alert('Author updated successfully');
            this.profileService.setModalVisible(false);
          },
          error: (err) => console.log(err),
        });
    }
  }

  ngOnDestroy(): void {
    if (this.createAuthorSubscription) {
      this.createAuthorSubscription.unsubscribe();
    }
  }
}
