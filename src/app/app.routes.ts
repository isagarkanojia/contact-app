import { LoginComponent } from "./login/login.component";
import { Routes } from "@angular/router";
import { SignUpRoutes } from './signup/signup.routes';
import { LoginRoutes } from "./login/login.routes";
import { ModulesRoutes } from "./modules/modules.routes";

export const routes: Routes = [
  ...LoginRoutes,
  ...SignUpRoutes ,
  ...ModulesRoutes,
  { path: '**', component: LoginComponent }
];
