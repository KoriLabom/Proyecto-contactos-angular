import { Component, ElementRef, inject, input, OnInit, viewChild } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { Contact, NewContact } from '../../interfaces/contact';
import { ContactsService } from '../../services/contacts-service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-edit-contact',
  imports: [FormsModule],
  templateUrl: './new-edit-contact.html',
  styleUrl: './new-edit-contact.scss'
})
export class NewEditContact implements OnInit {
  contactsService = inject(ContactsService);
  router = inject(Router)
  errorEnBack = false;
  idContacto = input<number>();
  contactoOriginal:Contact|undefined = undefined;
  form = viewChild<NgForm>('newContactForm');

  
  async ngOnInit() {
    if(this.idContacto()){
      this.contactoOriginal = await this.contactsService.getContactById(this.idContacto()!);
      this.form()?.setValue({
        firstName: this.contactoOriginal?.firstName,
        lastName: this.contactoOriginal?.lastName,
        address: this.contactoOriginal?.address,
        email: this.contactoOriginal?.email,
        image: this.contactoOriginal?.image,
        number: this.contactoOriginal?.number,
        company: this.contactoOriginal?.company,
        isFavourite: this.contactoOriginal?.isFavorite
      })
    }
  }

async handleFormSubmission(form: NgForm) {
  this.errorEnBack = false;

  const wantsFavorite = !!form.value.isFavourite;                // valor del checkbox en el form
  const wasFavorite = !!this.contactoOriginal?.isFavorite;       // valor original (si edito)

  const nuevoContacto: NewContact = {
    firstName: form.value.firstName,
    lastName: form.value.lastName,
    address: form.value.address,
    email: form.value.email,
    image: form.value.image,
    number: form.value.number,
    company: form.value.company,
    // importante: no dependemos de que el back lo tome aquí; lo resolvemos con setFavourite luego
    isFavorite: wantsFavorite
  };

  const result = await Swal.fire({
    title: this.idContacto()
      ? "¿Querés guardar los cambios?"
      : "¿Querés crear este nuevo contacto?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Guardar",
    denyButtonText: "No guardar"
  });

  if (!result.isConfirmed) {
    if (result.isDenied) await Swal.fire("Los cambios no se guardaron", "", "info");
    return;
  }

  let res: any;

  try {
    if (this.idContacto()) {
      // EDITAR
      res = await this.contactsService.editContact({
        ...nuevoContacto,
        id: this.idContacto()!.toString()
      });

      if (!res) {
        this.errorEnBack = true;
        return;
      }

      // Si cambió el estado de favorito (de seleccionado a no seleccionado o viceversa),
      // hacemos toggle con setFavourite (como en el archivo 2).
      if (wasFavorite !== wantsFavorite) {
        const ok = await this.contactsService.setFavourite(this.idContacto()!.toString());
        if (!ok) {
          // si falla, marcamos error pero igual dejamos guardado el resto
          this.errorEnBack = true;
        } else if (this.contactoOriginal) {
          this.contactoOriginal.isFavorite = wantsFavorite;
        }
      }
    } else {
      // CREAR
      res = await this.contactsService.createContact(nuevoContacto);
      if (!res) {
        this.errorEnBack = true;
        return;
      }

      // Si el usuario marcó favorito al crear, hacemos toggle vía setFavourite sobre el ID creado.
      // Asumimos que createContact devuelve el contacto creado (con .id). Si no, ajusta según tu servicio.
      const createdId: number | string | undefined =
        typeof res === 'object' && res !== null && 'id' in res ? (res as any).id : undefined;

      if (wantsFavorite && createdId !== undefined) {
        const ok = await this.contactsService.setFavourite(createdId as any);
        if (!ok) this.errorEnBack = true;
      }
    }

    await Swal.fire("¡Guardado!", "", "success");
    this.router.navigate(['/contactos']);
  } catch (e) {
    this.errorEnBack = true;
  }
}


}