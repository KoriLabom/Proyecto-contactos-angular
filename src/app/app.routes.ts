import { Routes } from '@angular/router';
import { LoginComponente } from './pages/login-componente/login-componente';
import { RegisterComponente } from './pages/register-componente/register-componente';
import { LoggedLayout } from './logged-layout/logged-layout';
import { ContactosComponente } from './pages/contactos-componente/contactos-componente';
import { NewEditContact } from './pages/new-edit-contact/new-edit-contact';
import { onlyUserGuard } from './guards/only-logged-user-guard';
export const routes: Routes = [
    {
        path: "login",
        component: LoginComponente
    },
    {
        path: "register",
        component: RegisterComponente
    },
    {
        path: "",
        component: LoggedLayout,
        children: [
            {
                path: "",
                redirectTo: "contactos",
                pathMatch: "full"
            },
            {
                path: "contactos",
                component: ContactosComponente
            }
        ],
        canActivate: [onlyUserGuard]
        
    },
    {
        path: "contactos/new",
        component: NewEditContact,
        canActivate: [onlyUserGuard]
    },
    {
        path: "contacts/:idContacto/edit",
        component: NewEditContact,
        canActivate: [onlyUserGuard]
      },{
        path: "contacts/new",
        component: NewEditContact,
        canActivate: [onlyUserGuard]
      },
];
