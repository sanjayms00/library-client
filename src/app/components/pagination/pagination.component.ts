import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent implements OnChanges {
  @Input() pageNo = 0;
  @Input() count = 0;
  @Input() total = 0;
  @Output() paginationEvent = new EventEmitter();

  pageNumbers: number[] = [];

  ngOnChanges(): void {
    this.pageNumbers = new Array(Math.ceil(this.total / this.count))
      .fill(0)
      .map((x, i) => i + 1);
  }

  changePage(page: number) {
    this.paginationEvent.emit(page);
  }
}
