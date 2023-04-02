import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchPipe } from "../pipes/search.pipe";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact-list',
    standalone: true,
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.css'],
    imports: [CommonModule, RouterModule, FormsModule, SearchPipe]
})
export class ContactListComponent {
  searchText: string = ''
  contacts: {id: string; name: string; email: string; phone: number}[] = [{
    id: 'qwert4',
    name: 'Amos',
    email: "amos@gmail.com",
    phone: 254742971932
  },{
    id: '9ij9ij',
    name: 'Mwongela',
    email: "mwongess@gmail.com",
    phone: 254797377943
  }];
  constructor() {}

}
