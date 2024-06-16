import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Book } from '../../interfaces/book.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() bookData!: Observable<Book[]>;
  @Output() cardEvent = new EventEmitter();

  detail(id: string) {
    this.cardEvent.emit(id);
  }
}
