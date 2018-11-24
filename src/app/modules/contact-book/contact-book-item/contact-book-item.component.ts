import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../../model/book.model';


@Component({
  selector: 'app-contact-book-item',
  templateUrl: './contact-book-item.component.html',
  styleUrls: ['./contact-book-item.component.css']
})
export class ContactBookItemComponent implements OnInit {

  @Output() onDelete = new EventEmitter();

  @Input() book: Book;

  ngOnInit() {
  }

  delete(event) {
    this.onDelete.emit();
  }

}
