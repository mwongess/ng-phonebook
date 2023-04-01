import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent {
  contacts: { name: string; email: string; phone: number}[] = [{
    name: 'Amos',
    email: "amos@gmail.com",
    phone: 254742971932
  },{
    name: 'Mwongela',
    email: "mwongess@gmail.com",
    phone: 254797377943
  }];
  constructor() {}

}
