import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {HomeComponent} from "./components/home/home.component";
import {KorpaComponent} from "./components/korpa/korpa.component";
import {PrijavaComponent} from "./components/prijava/prijava.component";
import {RegistracijaComponent} from "./components/registracija/registracija.component";
import {LjubimciService} from "./services/ljubimci.service";
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    KorpaComponent,
    PrijavaComponent,
    RegistracijaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [LjubimciService],
  bootstrap: [AppComponent]
})
export class AppModule { }
