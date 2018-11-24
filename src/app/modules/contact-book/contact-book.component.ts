import { Component, OnInit } from '@angular/core';
import { ContactDataService } from '../../service/contact-data.service';
import { Book } from '../../model/book.model';

@Component({
  selector: 'app-contact-book',
  templateUrl: './contact-book.component.html',
  styleUrls: ['./contact-book.component.css']
})
export class ContactBookComponent implements OnInit {

  books: Book[];

  constructor(private _contactDataService: ContactDataService, ) { }
  ngOnInit() {
    this.getContactBooks();
    this._contactDataService._updateBookList.subscribe(event=>{
      this.getContactBooks();
    })

  }
  getContactBooks() {
    this._contactDataService.getContactBooks().subscribe(
      (response) => {
        if (response['success']) {
          this.books = response['data'];
        } else {
        }
      }, (error) => {
      });
  }


  deleteBook(id) {
    this._contactDataService.deleteBook(id).subscribe(response => {
      console.log(response);
      this.getContactBooks();
    });
  }

}
