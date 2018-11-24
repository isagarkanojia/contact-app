import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactDataService } from '../../../service/contact-data.service';
import { Book } from '../../../model/book.model';

@Component({
  selector: 'app-contact-book-add',
  templateUrl: './contact-book-add.component.html',
  styleUrls: ['./contact-book-add.component.css']
})
export class ContactBookAddComponent implements OnInit {

  @ViewChild('form') _slform: NgForm
  item: Book

  constructor(private _contactService: ContactDataService, private _router: Router) { }

  ngOnInit() {
  }

  onAdd(form: NgForm) {
    const book = new Book(null, form.value.name);
    this._contactService.addBook(book).subscribe(response => {
      console.log(response);
      this._contactService._updateBookList.next(true);
      form.reset()
    });
  }

  onClear() {
    this._slform.reset();
  }
}
