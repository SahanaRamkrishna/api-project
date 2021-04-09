import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'user',component:UserComponent,canActivate:[AuthGuard]},
  {path: 'user/:id',component:UserDetailsComponent,canActivate:[AuthGuard]},
  {path: '',component:HomeComponent},
  {path: 'logout',component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
