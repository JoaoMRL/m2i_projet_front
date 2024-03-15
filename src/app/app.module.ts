import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CardViewComponent } from './component/card-view/card-view.component';
import { FooterComponent } from './component/footer/footer.component';
import { ListObjectsComponent } from './pages/list-objects/list-objects.component';
import { OneOfListObjectComponent } from './component/one-of-list-object/one-of-list-object.component';
import { ListAnnoncesComponent } from './pages/list-annonces/list-annonces.component';
import { ListEmpruntsComponent } from './pages/list-emprunts/list-emprunts.component';
import { AddObjectComponent } from './pages/add-object/add-object.component';
import { AddAnnonceComponent } from './pages/annonces/add-annonce/add-annonce.component';
import { ViewAnnonceComponent } from './pages/annonces/view-annonce/view-annonce.component';
import { AddEmpruntComponent } from './pages/emprunts/add-emprunt/add-emprunt.component';
import { ViewEmpruntComponent } from './pages/emprunts/view-emprunt/view-emprunt.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    NavbarComponent,
    CardViewComponent,
    FooterComponent,
    ListObjectsComponent,
    OneOfListObjectComponent,
    ListAnnoncesComponent,
    ListEmpruntsComponent,
    AddObjectComponent,
    AddAnnonceComponent,
    ViewAnnonceComponent,
    AddEmpruntComponent,
    ViewEmpruntComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LayoutModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
