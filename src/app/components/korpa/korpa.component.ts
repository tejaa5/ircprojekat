import { Component } from '@angular/core';
import {AuthService} from "../../services/AuthService";
import {Rezervacija} from "../../models/rezervacija.model";

@Component({
    selector: 'app-korpa',
    templateUrl: './korpa.component.html',
    styleUrl: './korpa.component.css',
    standalone: false
})
export class KorpaComponent {

  rezervacije: Rezervacija[] = [];
  ukupnaCena: number = 0;
  pretraga: string = '';

  constructor(private authService: AuthService) {
    this.ucitajKorpu();
  }

  // Učitaj rezervacije iz korisničke korpe
  ucitajKorpu(): void {
    this.rezervacije = this.authService.getCart();
    this.izracunajUkupnuCenu();
  }

  // Pretraga rezervacija u korpi
  pretrazi(): void {
    this.rezervacije = this.authService.getCart().filter(rezervacija =>
      rezervacija.naziv.toLowerCase().includes(this.pretraga.toLowerCase())
    );
  }

  // Brisanje rezervacije iz korpe
  obrisiRezervaciju(index: number): void {
    if (this.rezervacije[index].status === 'preuzeto') {
      this.rezervacije.splice(index, 1);
      this.authService.clearCart();
      this.rezervacije.forEach(rez => this.authService.addToCart(rez)); // Ažuriranje korpe
      this.izracunajUkupnuCenu();
    }
  }

  // Modifikacija statusa porudžbine
  modifikujStatus(index: number, noviStatus: 'u toku' | 'otkazano'): void {
    if (this.rezervacije[index].status === 'u toku' || this.rezervacije[index].status === 'otkazano') {
      this.rezervacije[index].status = noviStatus;
      this.authService.clearCart();
      this.rezervacije.forEach(rez => this.authService.addToCart(rez)); // Ažuriranje korpe
      this.izracunajUkupnuCenu();
    }
  }

  // Izračunavanje ukupne cene
  izracunajUkupnuCenu(): void {
    this.ukupnaCena = this.rezervacije.reduce((total, rezervacija) => total + rezervacija.cena, 0);
  }

}
