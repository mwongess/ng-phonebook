import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { contact } from '../interfaces/interfaces';

@Component({
  selector: 'app-edit-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
})
export class EditContactComponent implements OnInit {
  id!: string | number;
  contact!: contact;
  editContactForm!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}
  
  ngOnInit() {
    this.getId();
    this.getContact();
    this.populateForm();
  }

  getId() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }
  getContact() {
    this.contact = this.contactService.contacts.filter((contact) => {
      return contact.id == this.id;
    })[0];
  }
  populateForm() {
    this.editContactForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      company: new FormControl(),
      phone: new FormControl(this.contact.phone),
      email: new FormControl(this.contact.email),
    });
  }

  goBack() {
    history.back();
  }
}
