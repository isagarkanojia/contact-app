import { Injectable } from "@angular/core";
import { SecureHttp } from "../shared/secure-http";
import { Observable } from "rxjs";
import { API_BASE } from "../constants/api-endpoints.constant";
import { HttpUtil } from "../util/http.util";
import { Response } from '@angular/http';
import { UserService } from "./user.service";

@Injectable()
export class ContactDataService {
    constructor(private _secureHttp: SecureHttp,private _userService:UserService
    ) {
    }

    public getContactBooks(): Observable<any> {
        const userId = this._userService.getCurrentUser().id;
        const url = API_BASE+'/books';
        return this._secureHttp.get(url)
            .map((response: Response) => HttpUtil.extractData<any>(response))
            .finally(() => {
            });
    }

    public getContacts(bookId:number,page:number): Observable<any> {
        const url = API_BASE+'/book/'+bookId+'/contactsPage?page='+page;
        return this._secureHttp.get(url)
            .map((response: Response) => HttpUtil.extractData<any>(response))
            .finally(() => {
            });
    }

    public addBook(book): Observable<any> {
       
        const url = API_BASE+'/book';
        return this._secureHttp.post(url,book)
            .map((response: Response) => HttpUtil.extractData<any>(response))
            .finally(() => {
            });
    }


    public addContact(contact,bookId): Observable<any> {
       
        const url = API_BASE+'/book/'+bookId+'/contact';
        return this._secureHttp.post(url,contact)
            .map((response: Response) => HttpUtil.extractData<any>(response))
            .finally(() => {
            });
    }

}