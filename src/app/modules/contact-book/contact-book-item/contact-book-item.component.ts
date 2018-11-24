import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../../model/book.model';


@Component({
  selector: 'app-contact-book-item',
  templateUrl: './contact-book-item.component.html',
  styleUrls: ['./contact-book-item.component.css']
})
export class ContactBookItemComponent implements OnInit {

  @Input() book: Book;

  ngOnInit() {
  }

}
