import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactDataService } from '../../../service/contact-data.service';
import { Book } from '../../../model/book.model';
import { ToastrService } from 'ngx-toastr';
import { ToastComponent } from '../../../shared/toast/toast.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-book-add',
  templateUrl: './contact-book-add.component.html',
  styleUrls: ['./contact-book-add.component.css']
})
export class ContactBookAddComponent implements OnInit {

  @ViewChild('form') _slform: NgForm


  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  onClear() {
    this._slform.reset();
  }
}
