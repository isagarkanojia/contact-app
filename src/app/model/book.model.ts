import * as _ from 'lodash';

export class Book {
  id: number;
  name: string;


  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;

  }

  static fromJsonFlat({ id, name }) {
    let ret = new Book(id, name);
    return ret;
  }

}
