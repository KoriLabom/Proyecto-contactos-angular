import { Routes } from '@angular/router';
import { LoginComponente } from './pages/login-componente/login-componente';
import { RegisterComponente } from './pages/register-componente/register-componente';
import { LoggedLayout } from './logged-layout/logged-layout';
import { ContactosComponente } from './pages/contactos-componente/contactos-componente';
import { NewEditContact } from './pages/new-edit-contact/new-edit-contact';
import { onlyUserGuard } from './guards/only-logged-user-guard';
import { ContactDetailsPage } from './pages/contact-details-page/contact-details-page';
import { GroupsComponent } from './pages/groups-component/groups-component';
import { onlyGuestGuard } from './guards/only-public-user-guard';
export const routes: Routes = [
    {
        path: "login",
        component: LoginComponente,
        canActivate: [onlyGuestGuard]
    },
    {
        path: "register",
        component: RegisterComponente,
        canActivate: [onlyGuestGuard]
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
            },
            {
                path: "contactos/new",
                component: NewEditContact,
            },
            {
                path: "contacts/:idContacto/edit",
                component: NewEditContact,
            },
            {
                path: "contacts/new",
                component: NewEditContact,
            },
            {
                path: "contacts/:idContacto",
                component: ContactDetailsPage,
            },
            {
                path: "grupos",
                component: GroupsComponent
            }
        ],
        canActivate: [onlyUserGuard]
        
    }
];
