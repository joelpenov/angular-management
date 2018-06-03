import { Routes } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { LoginComponent } from "./login/login.component";

export const routes:Routes= [
    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: LoginComponent}
]