import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent {
  contacts: { name: string; email: string; phone: number}[] = [{
    name: 'Amos',
    email: "ams@gmail.com",
    phone: +254754322
  },{
    name: 'Mwongela',
    email: "ams@gmail.com",
    phone: +254754322
  }];
  constructor() {}

}
