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

  @ViewChild('form') slform: NgForm
  item: Book

  constructor(private contactService: ContactDataService, private router:Router) { }

  ngOnInit() {
  }

  onAdd(form: NgForm) {
    const book = new Book(null,form.value.name);
    this.contactService.addBook(book).subscribe(response => {
      console.log(response);
    });
    form.reset()
    this.router.navigateByUrl("/app/books");
  }

  onClear() {
    this.slform.reset();
  }

  onDelete() {
    this.onClear();
  }


}
