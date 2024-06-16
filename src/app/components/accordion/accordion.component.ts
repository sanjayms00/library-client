import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { FilterService } from '../../services/filter/filter.service';
import { Authorlist, Filter } from '../../interfaces/filter.interface';
import { Observable } from 'rxjs';
import { Book } from '../../interfaces/book.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
})
export class AccordionComponent implements OnInit {
  authors$!: Observable<Authorlist[]>;
  filterdData$!: Observable<Book[]>;
  @Output() filterEvent = new EventEmitter();

  constructor(private readonly filterService: FilterService) {}

  ngOnInit(): void {
    initFlowbite();
    this.getAuthors();
  }

  getAuthors() {
    this.authors$ = this.filterService.getAuthors();
  }

  getFilterDetails(filterForm: NgForm) {
    const { value } = filterForm;

    this.filterdData$ = this.filterService.filter(value);

    this.filterEvent.emit(this.filterdData$);

    filterForm.reset();
  }
}
