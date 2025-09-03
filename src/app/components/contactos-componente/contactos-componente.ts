import { Component, inject } from '@angular/core';
import { ContactListItem } from '../contact-list-item/contact-list-item';
import { ContactsService } from '../../services/contacts-service';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-contactos-componente',
  imports: [ContactListItem, FormsModule],
  templateUrl: './contactos-componente.html',
  styleUrl: './contactos-componente.scss'
})
export class ContactosComponente {
  contacts=inject(ContactsService)
arg1: string="";
arg2: string="";
arg3: string="";
arg4: string="";
arg5: string="";
arg6: string="";
arg7: string="";
  createContact(form:any){
    let firstName=form.firstName
    let lastName=form.lastName
    let address=form.address
    let email=form.email
    let image=form.image
    let number=form.number
    let company=form.company
    this.contacts.createContact(firstName,lastName,address,email,image,number,company)
  }
}
