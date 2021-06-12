import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login-register/login/login.component';
import {DemoAuthGuardComponent} from './demo-auth-guard/demo-auth-guard.component';
import {AuthGuard} from './helper/auth-guard';
import {HomeLayoutComponent} from './layout/home-layout/home-layout.component';
import {RegisterComponent} from "./login-register/register/register.component";
import {LogoutComponent} from './logout/logout.component';
import {DetailLayoutComponent} from './layout/detail-layout/detail-layout.component';


const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    loadChildren: () => import('./user/user.module').then(module => module.UserModule)
  },
  {
    path: 'detail',
    component: DetailLayoutComponent,
    loadChildren: () => import('./user/user.module').then(module => module.UserModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  // {
  //   path: 'register',
  //   component: RegisterComponent
  // },
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
