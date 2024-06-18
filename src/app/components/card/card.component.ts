import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { AllBook, Book } from '../../interfaces/book.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() bookData!: Observable<AllBook>;
  @Output() cardEvent = new EventEmitter();

  detail(id: string) {
    this.cardEvent.emit(id);
  }
}
