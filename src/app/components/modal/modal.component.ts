import {
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ProfileService } from '../../services/profile/profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements OnInit, OnDestroy {
  modalVisible = false;
  @Input() actionType!: string;
  @Input() fields!: string[];
  modalVisibleSubscription!: Subscription;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.modalVisibleSubscription = this.profileService.modalVisible$.subscribe(
      (visible: boolean) => {
        this.modalVisible = visible;
      }
    );
  }

  closeModal() {
    this.profileService.setModalVisible(false);
  }

  ngOnDestroy(): void {
    if (this.modalVisibleSubscription) {
      this.modalVisibleSubscription.unsubscribe();
    }
  }
}
