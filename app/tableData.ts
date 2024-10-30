// export const columns1  = [
//   {  name: 'Name', id: 'name' ,isRowHeader: true},
//   {  name: 'Email', id: 'email' },
//   {   name: 'Grade', id: 'grade' },
//   {   name: 'Number', id: 'number' },
// ];


// export const columns2  = [
//   { id: "title", columnName: "title", isRowHeader:true },
//   { id: "author", columnName: "author" },
//   { id: "genre", columnName: "genre" },
//   { id: "publishedYear", columnName: "publishedYear" },
//   { id: "pages", columnName: "pages" },
//   { id: "language", columnName: "language" },
//   { id: "available", columnName: "available" }
// ];

export const columns1 = [
  { id: "name", name: "Name", isRowHeader: true },
  { id: "email", name: "Email" },
  { id: "grade", name: "Grade" },
  { id: "number", name: "Number" },
];

export const columns2 = [
  { id: "title", name: "Title", isRowHeader: true },
  { id: "author", name: "Author" },
  { id: "genre", name: "Genre" },
  { id: "publishedYear", name: "Published Year" },
  { id: "pages", name: "Pages" },
  { id: "language", name: "Language" },
  { id: "available", name: "Available" },
];

export const table1: RowData[] = [
  { id: 0, name: "John Doe", email: "john.doe@example.com", grade: 85,number:4 },
  { id: 1, name: "Jane Smith", email: "jane.smith@example.com", grade: 90,number:1 },
  { id: 2, name: "Mark Johnson", email: "mark.johnson@example.com", grade: 78,number:3 },
  { id: 3, name: "Emily Davis", email: "emily.davis@example.com", grade: 92,number:2 },
  {
    id: 4,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    grade: 88,
    number:5
  },
];



export const table2:RowData[] =  [
  {
    id: 0,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    publishedYear: 1925,
    pages: 218,
    language: "English",
    available: true
  },
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    publishedYear: 1960,
    pages: 324,
    language: "English",
    available: true
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    publishedYear: 1949,
    pages: 328,
    language: "Russian",
    available: false
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    publishedYear: 1813,
    pages: 279,
    language: "English",
    available: true
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    publishedYear: 1951,
    pages: 234,
    language: "English",
    available: false
  },
  {
    id: 5,
    title: "Moby-Dick",
    author: "Herman Melville",
    genre: "Adventure",
    publishedYear: 1851,
    pages: 635,
    language: "English",
    available: true
  },
  {
    id: 6,
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: "Historical Fiction",
    publishedYear: 1869,
    pages: 1225,
    language: "Russian",
    available: false
  }
];


 