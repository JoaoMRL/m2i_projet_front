import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { authGuard } from './auth.guard';
import { ListObjectsComponent } from './pages/list-objects/list-objects.component';
import { ListEmpruntsComponent } from './pages/list-emprunts/list-emprunts.component';
import { ListAnnoncesComponent } from './pages/list-annonces/list-annonces.component';
import { AddObjectComponent } from './pages/add-object/add-object.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate:[authGuard]},
  { path: 'register', component: RegisterComponent },
  { path: 'objects', component: ListObjectsComponent, canActivate: [authGuard] },
  { path: 'annonces', component: ListAnnoncesComponent, canActivate: [authGuard] },
  { path: 'emprunts', component: ListEmpruntsComponent, canActivate: [authGuard] },
  { path: 'object', component: AddObjectComponent, canActivate: [authGuard] },
  { path: '**', component: HomeComponent, canActivate: [authGuard]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
