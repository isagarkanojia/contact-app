import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactDataService } from '../../../service/contact-data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Contact } from '../../../model/contact.model';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

  @ViewChild('form') slform: NgForm
  item: Contact
  id;

  constructor(private contactService: ContactDataService, private router: Router, private route: ActivatedRoute) {
    this.route.parent.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    )
  }

  ngOnInit() {

  }

  onAdd(form: NgForm) {
    const contact = new Contact(null, form.value.name, this.id, form.value.email, form.value.number);
    this.contactService.addContact(contact,this.id).subscribe(response => {
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
