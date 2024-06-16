import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthorData } from '../../interfaces/book.interface';
import { ProfileService } from '../../services/profile/profile.service';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrl: './author-form.component.css',
})
export class AuthorFormComponent {
  @Input() initialData!: AuthorData;
  authorForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.initialData = this.profileService.intitialformData;
    this.authorForm = this.fb.group({
      name: [this.initialData?.name || '', Validators.required],
      biography: [this.initialData?.biography || '', Validators.required],
      birthdate: [this.initialData?.birthdate || '', Validators.required],
    });
  }

  onSubmit(): void {
    console.log(this.authorForm.value);
  }
}
