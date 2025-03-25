import { Component } from '@angular/core';
import { AuthService } from '../../services/AuthService';
import { Router } from '@angular/router';
import { Korisnik } from '../../models/korisnik.model';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrl: './registracija.component.css',
  standalone: false

})
export class RegistracijaComponent {
  korisnik: Korisnik = {
    ime: '',
    prezime: '',
    email: '',
    telefon: '',
    adresa: '',
    omiljeneVrste: [], // Niz za omiljene vrste
    lozinka: ''
  };

  // Pomoćno polje za unos omiljenih vrsta u formi
  korisnikOmiljeneVrste: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  registrujSe(): void {
    // Ako korisnik unese omiljene vrste kao string, pretvaramo ih u niz
    if (this.korisnikOmiljeneVrste.trim() !== '') {
      this.korisnik.omiljeneVrste = this.korisnikOmiljeneVrste
        .split(',')
        .map(vrsta => vrsta.trim());
    }

    // Pozivamo servis za registraciju korisnika
    if (this.authService.registrujKorisnika(this.korisnik)) {
      alert('Registracija uspešna! Možete se prijaviti.');
      this.router.navigate(['/prijava']);
    } else {
      alert('Korisnik sa ovim emailom već postoji.');
    }
  }
}


