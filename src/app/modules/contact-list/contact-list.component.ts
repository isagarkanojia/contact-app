import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ContactDataService } from '../../service/contact-data.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  id;

  public page: number=0;

  public contacts: Array<any>;
  public pages: Array<number>;

  constructor(private route:ActivatedRoute,private router:Router,
    private contactService:ContactDataService) { 
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
      }
    )
  }

  ngOnInit() {
    this.getContacts();
  }


  setPage(i, event:any){
    event.preventDefault();
    this.page=i;
    this.getContacts();
  }


  getContacts(){
    this.contactService.getContacts(this.id,this.page).subscribe(response =>{
      this.contacts=response['content'];
      this.pages=new Array(response['totalPages']);

    });
  }

}
