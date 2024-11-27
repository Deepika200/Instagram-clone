import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoadingComponent } from './loading/loading.component';

const routes: Routes = [
  { path: 'loading', component: LoadingComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '', redirectTo: 'loading', pathMatch: 'full' }, // Default route

  {path:'auth/login',component:LoginComponent},
  {path:'auth/signup',component:SignupComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
