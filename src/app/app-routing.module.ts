import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './components/book/book.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthorComponent } from './components/author/author.component';
import { BookListComponent } from './components/book-list/book-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'book', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'book/:id', component: BookComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      { path: 'author/list', component: AuthorComponent },
      { path: 'book/list', component: BookListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
