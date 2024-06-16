import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input() isVisible = false;
  @Input() actionType!: string;
  @Input() fields!: string[];
  @Output() modalEvent = new EventEmitter();

  closeModal() {
    this.isVisible = false;
    this.modalEvent.emit(false);
  }
}
