import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user-service';
import { FormsModule } from '@angular/forms';
import { LoginData } from '../../interfaces/auth';
import { AuthService } from '../../services/auth-service';
@Component({
  selector: 'app-login-componente',
  imports: [FormsModule],
  templateUrl: './login-componente.html',
  styleUrl: './login-componente.scss'
})
export class LoginComponente {
  auth=inject(AuthService)
  login(form:any){
    let logindata:LoginData={
      email:form.email,
      password:form.password
    }
    this.auth.login(logindata)
  }
}
