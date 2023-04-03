import { Injectable } from '@angular/core';
import { contact } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: contact[] = [
    {
      id: 'qwert4',
      name: 'Amos',
      email: "amos@gmail.com",
      phone: 254742971932
    },{
      id: '9ij9ij',
      name: 'Mwongela',
      email: "mwongess@gmail.com",
      phone: 254797377943
    },
    {
      id: '1',
      name: "John Doe",
      email: "john.doe@example.com",
      phone: 25434567890,
    },
    {
      id:'2',
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: 25445678901,
    },
    {
      id: '3',
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      phone: 25456789012,
    }
  ]
  constructor() { }

  getContacts(){
    return this.contacts
  }
}
