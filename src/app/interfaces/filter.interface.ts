export interface Filter {
  authorId?: string;
  startDate?: string;
  endDate?: string;
}

// interface for filtering author list
export interface Authorlist {
  _id: string;
  name: string;
}
