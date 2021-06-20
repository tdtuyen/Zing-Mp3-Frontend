import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login-register/login/login.component';
import {DemoAuthGuardComponent} from './demo-auth-guard/demo-auth-guard.component';
import {AuthGuard} from './helper/auth-guard';
import {HomeLayoutComponent} from './layout/home-layout/home-layout.component';

import {DetailLayoutComponent} from './layout/detail-layout/detail-layout.component';
import {LogoutComponent} from './logout/logout/logout.component';
import {FeatureArtitsComponent} from './user/artist/feature-artits/feature-artits.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {ListPlaylistComponent} from './user/playlist/list-playlist/list-playlist.component';
import {SearchComponent} from './user/search/search.component';



const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    loadChildren: () => import('./user/user.module').then(module => module.UserModule)
  },
  {
    path: 'user',
    component: DetailLayoutComponent,
    loadChildren: () => import('./user/user.module').then(module => module.UserModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'demo',
    canActivate: [AuthGuard],
    component: DemoAuthGuardComponent
  },
  {
    path: 'user/search/:namePlaylist',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
