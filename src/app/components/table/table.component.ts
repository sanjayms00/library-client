import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { ProfileService } from '../../services/profile/profile.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  providers: [ProfileService],
})
export class TableComponent implements OnInit {
  modalActionType!: string;
  @Input() action!: string;
  @Input() listData!: any[];
  @Input() fields!: any[];
  modalVisible = false;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    initFlowbite();
  }

  getModalEvent(event = false) {
    this.modalVisible = event;
  }

  showModal(val: boolean, action: string, data: any) {
    this.modalVisible = val;
    this.modalActionType = action;
    this.profileService.intitialformData = data;
  }
}
