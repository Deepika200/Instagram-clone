import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: AuthComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
