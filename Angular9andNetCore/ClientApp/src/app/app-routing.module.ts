import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { PuebloComponent } from './pueblo/pueblo.componen';
import { CiudadComponent } from './Ciudad/Ciudad.component';
import { UsuarioComponent } from './Usuario/Usuario.component';
import { BooksComponent } from './book/books.component';



const routes: Routes = [
  
  { path: 'register', component: RegisterComponent },
  { path: 'pueblo', component: PuebloComponent },
  { path: 'ciudad', component: CiudadComponent },
  { path: 'Usuario', component: UsuarioComponent },
  { path: 'books', component: BooksComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
