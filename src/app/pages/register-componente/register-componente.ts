import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/user-service';
import { FormsModule, NgForm } from '@angular/forms';
import { Spinner } from "../../components/spinner/spinner";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-componente',
  imports: [FormsModule, Spinner, RouterModule],
  templateUrl: './register-componente.html',
  styleUrl: './register-componente.scss'
})
export class RegisterComponente {
  errorRegister=false;
  userService = inject(UsersService);
  isLoading = false;
  router = inject(Router);

  async register(form: NgForm){
    this.errorRegister = false; //Elimino el mensaje de error
    // Hago validación extra sobre el formulario
    if(!form.value.email || 
      !form.value.password || 
      !form.value.password2 || 
      !form.value.firstName ||
      !form.value.lastName ||
      form.value.password !== form.value.password2){
      this.errorRegister = true;
      return
    }
    this.isLoading = true;
    const res = await this.userService.register(form.value);
    if(res.ok){
      this.router.navigate(["/login"])
    }
    this.isLoading = false;
    this.errorRegister = true;
  }
}
