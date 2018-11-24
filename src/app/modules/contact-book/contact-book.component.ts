import { Component, OnInit } from '@angular/core';
import { ContactDataService } from '../../service/contact-data.service';
import { Book } from '../../model/book.model';

@Component({
  selector: 'app-contact-book',
  templateUrl: './contact-book.component.html',
  styleUrls: ['./contact-book.component.css']
})
export class ContactBookComponent implements OnInit {

  books :Book[];

  constructor(private contactDataService:ContactDataService,) { }
  ngOnInit() {
      this.getContactBooks();
   
  }
  getContactBooks() {
    this.contactDataService.getContactBooks().subscribe(
      (response) => {
        if (response['success']) {
          this.books=response['data'];
        } else {
        }
      }, (error) => {
      });
  }


}
