import { WelcomeComponent } from "./welcome/welcome.component";
import { NotFoundComponent } from "./shared/error-codes/404.component";
import { UserModule } from "./user/user.module";

export const routes = [  
    {path: 'user', loadChildren: './user/user.module#UserModule'},
    {path: 'welcome', component: WelcomeComponent},
    {path: '', component: WelcomeComponent, pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}   
  ]