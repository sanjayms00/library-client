import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { initFlowbite } from 'flowbite';
import { ProfileService } from '../../services/profile/profile.service';
import { AuthorService } from '../../services/author/author.service';
import { BookService } from '../../services/book/book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  providers: [ProfileService],
})
export class TableComponent implements OnInit, OnDestroy {
  modalActionType!: string;
  @Input() action!: string;
  @Input() page: number = 0;
  @Input() count: number = 12;
  @Input() listData!: any[];
  @Input() fields!: any[];
  deleteSubscription!: Subscription;

  constructor(
    private profileService: ProfileService,
    private authorService: AuthorService,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    initFlowbite();
  }

  showModal(val: boolean, action: string, data: any) {
    this.profileService.setModalVisible(val);
    this.modalActionType = action;
    this.profileService.intitialformData = data;
  }

  deleteData(action: string, _id: string) {
    if (action === 'Book') {
      this.deleteSubscription = this.bookService.delete(_id).subscribe({
        next: (res) => alert('Book deleted successfully'),
        error: (err) => console.log(err),
      });
    } else {
      this.deleteSubscription = this.authorService.delete(_id).subscribe({
        next: (res) => alert('Author deleted successfully'),
        error: (err) => {
          console.log(err);
          alert(err.error.message);
        },
      });
    }
  }

  ngOnDestroy(): void {
    if (this.deleteSubscription) {
      this.deleteSubscription.unsubscribe();
    }
  }
}
