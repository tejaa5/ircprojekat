import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {RegistracijaComponent} from "./components/registracija/registracija.component";
import {PrijavaComponent} from "./components/prijava/prijava.component";
import {KorpaComponent} from "./components/korpa/korpa.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '/prijava', pathMatch: 'full' },
  { path: 'registracija', component: RegistracijaComponent },
  { path: 'prijava', component: PrijavaComponent },
  { path: 'korpa', component: KorpaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
