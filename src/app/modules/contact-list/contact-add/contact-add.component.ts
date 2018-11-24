import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactDataService } from '../../../service/contact-data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Contact } from '../../../model/contact.model';
import { ToastComponent } from '../../../shared/toast/toast.component';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

  @ViewChild('form') slform: NgForm
  @Input() id;

  constructor(public activeModal: NgbActiveModal ) {

  }

  ngOnInit() {

  }



  onClear() {
    this.slform.reset();
  }

}
