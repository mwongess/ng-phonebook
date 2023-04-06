import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SearchPipe } from '../pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { contact } from '../interfaces/interfaces';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  imports: [CommonModule, RouterModule, FormsModule, SearchPipe],
})
export class ContactListComponent implements OnInit {
  searchText!: string;
  contacts!: contact[];
  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.contacts = this.contactService
      .getContacts()
      .sort((contact_a:contact, contact_b:contact) =>
        contact_a.firstName > contact_b.firstName ? 1 : -1
      );
  }
  seemoreDetails(id: string | number) {
    this.router.navigate([`/contact/details/${id}`], {
      relativeTo: this.route,
    });
  }
}
