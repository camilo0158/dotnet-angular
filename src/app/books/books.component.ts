import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: any;

  constructor(private htttp: HttpClient) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.htttp.get('https://localhost:5001/api/books').subscribe( response => {
      this.books = response;
    }, error => {
      console.log(  error );
    });
  }
}
