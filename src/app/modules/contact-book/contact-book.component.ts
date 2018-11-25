import { Component, OnInit } from '@angular/core';
import { ContactDataService } from '../../service/contact-data.service';
import { Book } from '../../model/book.model';
import { ToastComponent } from '../../shared/toast/toast.component';
import { ToastrService } from 'ngx-toastr';
import { ContactBookAddComponent } from './contact-book-add/contact-book-add.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { SpinnyService } from '../../shared/spinny/spinny.service';

@Component({
  selector: 'app-contact-book',
  templateUrl: './contact-book.component.html',
  styleUrls: ['./contact-book.component.css']
})
export class ContactBookComponent implements OnInit {

  books: Book[];

  constructor(private _contactService: ContactDataService,
    private _toastr: ToastrService, private _spinnyService: SpinnyService,
    private _modalService: NgbModal) { }
  ngOnInit() {
    this.getContactBooks();
    this._contactService._updateBookList.subscribe(event => {
      this.getContactBooks();
    })

  }
  getContactBooks() {
    this._spinnyService.start();
    this._contactService.getContactBooks().subscribe(
      (response) => {
        if (response['success']) {
          this.books = response['data'];
        } else {
        }

        this._spinnyService.stop();
      }, (error) => {
      });
  }


  deleteBook(id) {
    this._spinnyService.start();
    this._contactService.deleteBook(id).subscribe(response => {

      if (response['success']) {
        this._spinnyService.stop();
        this._toastr.show('Contact Book deleted successfully', 'Success', {
          toastComponent: ToastComponent,
          toastClass: 'success-toast-class',
          timeOut: 2000,
          positionClass: 'toast-top-center'
        });
      }

      this.getContactBooks();
    });
  }


  addBook() {
    const modalRef = this._modalService.open(ContactBookAddComponent);
    modalRef.result.then(response => {
      if (response === 'Close') {
        modalRef.close();
      } else {
        this.saveBook(response);
      }
    })
  }

  saveBook(form: NgForm) {
    this._spinnyService.start();
    const book = new Book(null, form.value.name);
    this._contactService.addBook(book).subscribe(response => {
      if (response['success']) {
        this._contactService._updateBookList.next(true);
        form.reset();
        this._toastr.show('Contact Book added successfully', 'Success', {
          toastComponent: ToastComponent,
          toastClass: 'success-toast-class',
          timeOut: 2000,
          positionClass: 'toast-top-center'
        });
      }else{
        let error = response['error']['message'] ?  response['error']['message']:'Error Occured!'
        this._toastr.show(error, 'Error', {
          toastComponent: ToastComponent,
          toastClass: 'error-toast-class',
          disableTimeOut:true,
          positionClass: 'toast-top-center'
        });
      }
      this._contactService._updateBookList.next(true);
      form.reset()
      this._spinnyService.stop();
    });
  }
}
