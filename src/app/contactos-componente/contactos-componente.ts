import { Component } from '@angular/core';
import { ContactListItem } from '../components/contact-list-item/contact-list-item';
import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-contactos-componente',
  imports: [ContactListItem],
  templateUrl: './contactos-componente.html',
  styleUrl: './contactos-componente.scss'
})
export class ContactosComponente {
  contacts:Contact[]=[
    {
      firstName:"Mateo",
      lastName:"Labombarda",
      number:"12345678",
      image:"",
      company:"",
      address:"",
      email:"mlabombarda@gmail.com",
      isFavourite:true
    },
    {
      firstName:"Juan",
      lastName:"Novarino",
      number:"12345678",
      image:"",
      company:"",
      address:"",
      email:"jnovarino@gmail.com",
      isFavourite:true
    }
  ]
}
