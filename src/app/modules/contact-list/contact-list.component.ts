import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ContactDataService } from '../../service/contact-data.service';
import { ToastComponent } from '../../shared/toast/toast.component';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { NgForm } from '@angular/forms';
import { Contact } from '../../model/contact.model';
import { NgModuleRef } from '@angular/core/src/render3';
import { SpinnyService } from '../../shared/spinny/spinny.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  id;
  page = 0;
  contacts: Array<any>;
  totalPages;
  searchText;

  constructor(private route: ActivatedRoute, private router: Router,
    private _contactService: ContactDataService,
    private _toastr: ToastrService,
    private _modalService: NgbModal, private _spinnyService: SpinnyService,
  ) {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    )
  }

  ngOnInit() {
    this.getContacts();
    this._contactService._updateContactList.subscribe(event => {
      this.getContacts();
    })
  }


  getContacts() {
    this._spinnyService.start();
    this._contactService.getContacts(this.id, this.page).subscribe(response => {
      this.contacts = response['content'];
      this.totalPages = response['totalPages'];
      this._spinnyService.stop();
    }
    );
  }

  delete(event, contactId) {
    this._spinnyService.start();
    this._contactService.deleteContact(this.id, contactId).subscribe(response => {
      if (response['success']) {
        this._toastr.show('Contact deleted successfully', 'Success', {
          toastComponent: ToastComponent,
          toastClass: 'success-toast-class',
          timeOut: 2000,
          positionClass: 'toast-top-center'
        });
        this._spinnyService.stop();
      }
      this.getContacts();
    });
  }


  addContact() {
    const modalRef = this._modalService.open(ContactAddComponent)
    modalRef.componentInstance.id = this.id;
    modalRef.result.then(response => {
      if (response === 'Close') {
        modalRef.close();
      } else {
        this.saveContact(response);
      }
    })
  }

  saveContact(form: NgForm) {
    this._spinnyService.start();
    const contact = new Contact(null, form.value.name, this.id, form.value.email, form.value.number);
    this._contactService.addContact(contact, this.id).subscribe(response => {
      if (response['success']) {
        this._contactService._updateBookList.next(true);
        form.reset();
        this._toastr.show('Contact Book added successfully', 'Success', {
          toastComponent: ToastComponent,
          toastClass: 'success-toast-class',
          timeOut: 2000,
          positionClass: 'toast-top-center'
        });
      } else {
        let error = response['error']['message'] ? response['error']['message'] : 'Error Occured!'
        this._toastr.show(error, 'Error', {
          toastComponent: ToastComponent,
          toastClass: 'error-toast-class',
          disableTimeOut: true,
          positionClass: 'toast-top-center'
        });
      }
      this._contactService._updateContactList.next(true);
      form.reset()
      this._spinnyService.stop();
    });

  }


  edit(event, contact) {
    const modalRef = this._modalService.open(ContactAddComponent)
    modalRef.componentInstance.id = this.id;
    modalRef.componentInstance.contact = contact;
    modalRef.componentInstance.editMode = true;
    modalRef.result.then(response => {
      if (response === 'Close') {
        modalRef.close();
      } else {
        this.saveContact(response);
      }
    })

    // // const contact = new Contact(null, form.value.name, this.id, form.value.email, form.value.number);
    // this._contactService.updateContact(contact, this.id).subscribe(response => {
    //   if (response['success']) {
    //     this._contactService._updateBookList.next(true);
    //     this._toastr.show('Contact Book updated successfully', 'Success', {
    //       toastComponent: ToastComponent,
    //       toastClass: 'success-toast-class',
    //       timeOut: 2000,
    //       positionClass: 'toast-top-center'
    //     });
    //   } else {
    //     let error = response['error']['message'] ? response['error']['message'] : 'Error Occured!'
    //     this._toastr.show(error, 'Error', {
    //       toastComponent: ToastComponent,
    //       toastClass: 'error-toast-class',
    //       disableTimeOut: true,
    //       positionClass: 'toast-top-center'
    //     });
    //   }
    //   this._contactService._updateContactList.next(true);
    // });

  }


  setPage(page: number, event: any) {
    event.preventDefault();
    if (page >= 0 && (page < this.totalPages)) {
      console.log(page);
      this.page = page;
      this.getContacts();
    }
  }

  onSearchChange(event) {
    this.getContactsBySearch(event);
  }

  getContactsBySearch(search) {
    this._spinnyService.start();
    if (search && search != '') {
      this.page = 0;
      this._contactService.getContactsBySearch(this.id, this.page, search).subscribe(response => {
        this.contacts = response['content'];
        this.totalPages = response['totalPages'];
        this._spinnyService.stop();
      });
    } else {
      this.getContacts();
     
    }
    
    
  }

}
