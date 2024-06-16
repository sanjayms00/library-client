import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './components/book/book.component';
import { CardComponent } from './components/card/card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './components/pagination/pagination.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TableComponent } from './components/table/table.component';
import { AuthorComponent } from './components/author/author.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { ModalComponent } from './components/modal/modal.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { AuthorFormComponent } from './components/author-form/author-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    CardComponent,
    SpinnerComponent,
    PaginationComponent,
    HeaderComponent,
    FooterComponent,
    AccordionComponent,
    ProfileComponent,
    TableComponent,
    AuthorComponent,
    BookListComponent,
    ModalComponent,
    BookFormComponent,
    AuthorFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
