import { Injectable } from '@angular/core';
import { contact } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: contact[] = [
    {
      id: 'qwert4',
      firstName: "Amos",
      lastName: 'Mwongela',
      email: "amos@gmail.com",
      phone: "254 742 971932"
    },
    {
      id: '9ij9ij',
      firstName: "Mwongela",
      lastName: 'Gabriel',
      email: "mwongess@gmail.com",
      phone: "254 797 377943"
    },
    {
      id: '1',
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "254 345 67890",
    },
    {
      id:'2',
      firstName: "Jane ",
      lastName: "Smith",
      email: "jane.smith@example.com",
      phone: "254 456 78901",
    },
    {
      id: '3',
      firstName: "Bob ",
      lastName: "Johnson",
      email: "bob.johnson@example.com",
      phone: "254 567 89012",
    }
  ]
  constructor() { }

  getContacts(){
    return this.contacts
  }
}
