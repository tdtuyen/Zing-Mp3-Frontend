import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DemoAuthGuardComponent} from './demo-auth-guard/demo-auth-guard.component';
import {AuthGuard} from './helper/auth-guard';
import {HomeLayoutComponent} from './layout/home-layout/home-layout.component';
import {RegisterComponent} from "./register/register.component";


const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    loadChildren: () => import('./user/user.module').then(module => module.UserModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'logout',
    component: LoginComponent
  },
  {
    path: 'demo',
    canActivate: [AuthGuard],
    component: DemoAuthGuardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
