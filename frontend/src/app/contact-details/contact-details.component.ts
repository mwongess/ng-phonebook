import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { contact } from '../interfaces/interfaces';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent implements OnInit {
  contact!: contact
  id: string | number = ''
  constructor(private router: Router, private route: ActivatedRoute,private contactService: ContactService) {}
  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.id = params['id']

      this.contact = this.contactService.getContacts().filter(contact => {
        return contact.id == this.id
      })[0]

    })
  }

}
