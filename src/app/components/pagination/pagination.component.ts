import {
  AfterContentInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent implements OnChanges {
  @Input() pageNo = 0;
  @Input() count = 12;
  @Input() total = 1;
  @Output() paginationEvent = new EventEmitter();
  pageCount = 1;

  pageNumbers: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.calculatePageNumbers();
  }

  calculatePageNumbers() {
    if (this.count > 0) {
      this.pageCount = Math.ceil(this.total / this.count);
      this.pageNumbers = new Array(this.pageCount).fill(1);
    } else {
      this.pageNumbers = [];
    }
  }

  changePage(page: number) {
    this.paginationEvent.emit(page);
  }
}
