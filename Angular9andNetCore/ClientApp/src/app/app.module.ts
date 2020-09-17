import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { PuebloComponent } from './pueblo/pueblo.componen';
import { CiudadComponent } from './Ciudad/Ciudad.component';
import { RegisterService } from './services/Register.service';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './services/Usuario.service';
import { UsuarioComponent } from './Usuario/Usuario.component';
import { BooksComponent } from './book/books.component';
import { BookService } from './services/books.service';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    PuebloComponent,
    CiudadComponent,
    UsuarioComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
 

  ],
  providers: [RegisterService, BookService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
