import { Injectable } from '@angular/core';
import { Korisnik } from '../models/korisnik.model';
import {Rezervacija} from "../models/rezervacija.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;
  private korisnik: Korisnik | null = null;
  private cart: any[] = [];

  constructor() {
    this.ucitajKorisnika();
  }

  // Provera da li je korisnik ulogovan
  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  login(email: string, lozinka: string): boolean {
    const sacuvaniKorisnici = localStorage.getItem('korisnici');
    if (sacuvaniKorisnici) {
      const korisnici: Korisnik[] = JSON.parse(sacuvaniKorisnici);
      const korisnik = korisnici.find(k => k.email === email && k.lozinka === lozinka);

      if (korisnik) {
        this.korisnik = korisnik;
        this.loggedIn = true;
        return true;
      }
    }
    return false; // Pogrešni podaci za prijavu
  }


  // Odjava korisnika
  logout(): void {
    this.loggedIn = false;
    this.korisnik = null;
    localStorage.removeItem('korisnik');
  }

  registrujKorisnika(noviKorisnik: Korisnik): boolean {
    const sacuvaniKorisnici = localStorage.getItem('korisnici');
    let korisnici: Korisnik[] = sacuvaniKorisnici ? JSON.parse(sacuvaniKorisnici) : [];

    // Provera da li već postoji korisnik sa istim emailom
    if (korisnici.some(k => k.email === noviKorisnik.email)) {
      return false; // Korisnik već postoji
    }

    korisnici.push(noviKorisnik);
    localStorage.setItem('korisnici', JSON.stringify(korisnici));

    this.korisnik = noviKorisnik;
    this.loggedIn = true;
    return true;
  }

  private ucitajKorisnika(): void {
    const sacuvaniKorisnici = localStorage.getItem('korisnici');
    if (sacuvaniKorisnici) {
      const korisnici: Korisnik[] = JSON.parse(sacuvaniKorisnici);
      // Pretpostavljamo da je poslednji korisnik koji se registrovao onaj koji se prijavio
      this.korisnik = korisnici[korisnici.length - 1];
      this.loggedIn = true;
    }
  }



  // Dohvati podatke o trenutnom korisniku
  getKorisnik(): Korisnik | null {
    return this.korisnik;
  }

  // Ažuriranje profila korisnika
  updateProfil(podaci: Partial<Korisnik>): boolean {
    if (this.korisnik) {
      this.korisnik = { ...this.korisnik, ...podaci };
      localStorage.setItem('korisnik', JSON.stringify(this.korisnik));
      return true;
    }
    return false;
  }

// Dodajemo metodu za dohvatanje i ažuriranje rezervacija u korisničkoj korpi
  getCart(): Rezervacija[] {
    return JSON.parse(localStorage.getItem('korpa') || '[]');
  }

  addToCart(rezervacija: Rezervacija): void {
    const cart = this.getCart();
    cart.push(rezervacija);
    localStorage.setItem('korpa', JSON.stringify(cart));
  }

  clearCart(): void {
    localStorage.removeItem('korpa');
  }



}


