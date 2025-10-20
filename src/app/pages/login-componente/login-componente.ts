import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/user-service';
import { FormsModule } from '@angular/forms';
import { LoginData } from '../../interfaces/auth';
import { AuthService } from '../../services/auth-service';
import { Spinner } from "../../components/spinner/spinner";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-componente',
  imports: [FormsModule, Spinner, RouterModule],
  templateUrl: './login-componente.html',
  styleUrl: './login-componente.scss'
})
export class LoginComponente {
  auth=inject(AuthService)
  isLoading=false
  errorLogin=false
  async login(form:any){
    console.log(form.value)
    this.errorLogin = false;
    let logindata:LoginData={
      email:form.email,
      password:form.password
    }
    this.isLoading = true;
    await this.auth.login(logindata);
    this.isLoading = false;
    this.errorLogin = true;
    
  }
}
