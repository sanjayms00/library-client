import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  //behaviour subject to keep track of thre changes in the value
  private modalVisibleSubject = new BehaviorSubject<boolean>(false);
  modalVisible$ = this.modalVisibleSubject.asObservable();
  intitialformData: any;

  setModalVisible(visible: boolean) {
    this.modalVisibleSubject.next(visible);
  }
}
