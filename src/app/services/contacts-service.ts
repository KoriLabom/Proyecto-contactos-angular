import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts:Contact[]=[
    {
      id:0,
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
      id:1,
      firstName:"Juan",
      lastName:"Novarino",
      number:"12345678",
      image:"",
      company:"",
      address:"",
      email:"jnovarino@gmail.com",
      isFavourite:true
    },
    {
      id:2,
      firstName:"Agustin",
      lastName:"Escoda",
      number:"12345678",
      image:"",
      company:"",
      address:"",
      email:"aescoda@gmail.com",
      isFavourite:true
    },
    {
      id:3,
      firstName:"Tomas",
      lastName:"Rosciolino",
      number:"12345678",
      image:"",
      company:"",
      address:"",
      email:"trosciolino@gmail.com",
      isFavourite:true
    }
  ]
  getContacts(){}
  getContactById(){}
  createContact(firstName:string,lastName:string,number:string,image:string,company:string,address:string,email:string){
    let ultimoId = this.contacts[this.contacts.length - 1].id;

    const newcontact:Contact={
      id:ultimoId+1,
      firstName:firstName,
      lastName:lastName,
      number:number,
      image:image,
      company:company,
      address:address,
      email:email,
      isFavourite:true
    }
    this.contacts.push(newcontact)
  }

  editContact(){}
  deleteContact(id:number){
    this.contacts=this.contacts.filter(contact=>contact.id!==id)
  }
  setFavourite(){}
}
