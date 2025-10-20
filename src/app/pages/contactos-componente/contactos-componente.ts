import { Component, inject, OnInit } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { ContactListItem } from '../../components/contact-list-item/contact-list-item';
import { Contact, NewContact } from '../../interfaces/contact';
import { AuthService } from '../../services/auth-service';
import { ContactsService } from '../../services/contacts-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactos-componente',
  imports: [ContactListItem, FormsModule, RouterLink, RouterModule],
  templateUrl: './contactos-componente.html',
  styleUrl: './contactos-componente.scss'
})
export class ContactosComponente implements OnInit {
  ngOnInit(): void {
    this.contactsService.getContacts();
  }

  authService = inject(AuthService);
  contactsService = inject(ContactsService);

}