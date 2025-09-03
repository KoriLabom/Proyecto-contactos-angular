import { Routes } from '@angular/router';
import { LoginComponente } from './pages/login-componente/login-componente';
import { RegisterComponente } from './components/register-componente/register-componente';
import { LoggedLayout } from './logged-layout/logged-layout';
import { ContactosComponente } from './components/contactos-componente/contactos-componente';

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
                path: "contactos",
                component: ContactosComponente
            }
        ]
        
    }
];
