export interface Book {
  _id: string;
  title: string;
  description: string;
  authorId: string;
  publishedDate: Date;
  authorData?: AuthorData;
}

export interface AuthorData {
  _id: string;
  name: string;
  biography: string;
  birthdate: Date;
}

export interface CreateAuthor {
  name: string;
  biography: string;
  birthdate: Date;
}

export interface CreateBook {
  name: string;
  biography: string;
  birthdate: Date;
}

export interface Author {
  author: AuthorData[];
  total: number;
}

export interface AllBook {
  allBooks: Book[];
  total: number;
}
