import * as _ from 'lodash';

export class Contact {
  id: number;
  name: string;
  contactbookid: number;
  email: string;
  number: number;

  constructor(id: number, name: string, contactbookid: number, email: string, number: number) {
    this.id = id;
    this.name = name;
    this.contactbookid = contactbookid;
    this.email = email;
    this.number = number;

  }

  static fromJsonFlat({ id, name, contactbookid, email, number }) {
    let ret = new Contact(id, name, contactbookid, email, number);
    return ret;
  }

}
