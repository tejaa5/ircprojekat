import { Component } from '@angular/core';
import {LjubimciService} from "../../services/ljubimci.service";
import {Ljubimac} from "../../models/ljubimac.model";
import {AuthService} from "../../services/AuthService";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent {



  ljubimci: Ljubimac[] = [
    { id: 1, ime: 'Zec', opis: 'Pahuljast, prijateljski i društven zec sa dugim opuštenim ušima. Idealni su kao kućni ljubimci, potrebna im je redovna nega zbog krzna.', vrsta: 'American Fuzzy Lop', starost: 3, velicina: 'Mala', poreklo: 'Amerika', cena: 5000, recenzije: [{ korisnik: 'Marko', ocena: 5, komentar: 'Premeeekaan i deca ga obozavaju!!' }], slika: '/zec2.jpg' },
    { id: 2, ime: 'Pas', opis: 'Mali pas sa karakterističnim naborima na licu, velikim očima i kratkom dlakom. Veseo je, društven i odan, odličan je ljubimac za porodicu.', vrsta: 'Mops', starost: 5, velicina: 'Mala', poreklo: 'Kina', cena: 15000, recenzije: [{ korisnik: 'Jelena', ocena: 4, komentar: 'Divan, ali glasan.' }], slika: '/pas2.jpg' },
    { id: 3, ime: 'Mačka', opis: 'Veoma mirna mačka sa dugom dlakom. Voli udobnost.', vrsta: 'Persijska', starost: 0.5, velicina: 'Mala', poreklo: 'Persija', cena: 20000, recenzije: [{ korisnik: 'Ana', ocena: 5, komentar: 'Najbolja vrsta!' }], slika: '/macka.jpg' },
    { id: 4, ime: 'Papagaj', opis: 'Ovi papagaji su inteligentni, društveni i vezani za svoje vlasnike, što ih čini odličnim ljubimcima. Iako su ljubazni i vezani za svoju porodicu, mogu biti i pomalo zadržani prema strancima.', vrsta: 'Afrički sivi', starost: 2, velicina: 'Srednja', poreklo: 'Afrika', cena: 70000, recenzije: [{ korisnik: 'David', ocena: 3, komentar: 'Nije baš pitoma vrsta...' }], slika: '/papagaj.jpg' },
    { id: 5, ime: 'Ribica', opis: 'Mirna, društvena i lako se prilagođava različitim uslovima u akvarijumu.', vrsta: 'Neon Tetra', starost: 1, velicina: 'Mala', poreklo: 'Južna Amerika', cena: 1000, recenzije: [{ korisnik: 'Nikola', ocena: 4, komentar: '' }], slika: '/ribica.jpg' },
    { id: 6, ime: 'Pas', opis: 'Energičan i prijateljski nastrojen.', vrsta: 'Dalmatinac', starost: 3, velicina: 'Srednja', poreklo: 'Hrvatska', cena: 10000, recenzije: [{ korisnik: 'Sara', ocena: 4, komentar: 'Umiljat.' }], slika: '/dalmatinac.jpg' },
    { id: 7, ime: 'Hrčak', opis: 'Sirijski hrčak je najveći i najpoznatiji među svim vrstama hrčaka. Ima gustu, mekanu dlaku koja može biti u raznim bojama. On je noćna životinja, što znači da je najaktivniji uveče i noću. Zbog svoje mirne prirode, često je izabran kao kućni ljubimac.', vrsta: 'Sirijski hrčak', starost: 1, velicina: 'Mala', poreklo: 'Sirija', cena: 2000, recenzije: [{ korisnik: 'Marko', ocena: 3, komentar: 'Ne mogu da spavam zbog njega' }], slika: '/hrcak.jpg' },
    { id: 8, ime: 'Pas', opis: 'Nemačke doge su često nazvane "gentle giants" zbog svoje prijateljske i nežne naravi prema porodici. Iako su velike, obično su dobri sa decom i drugim ljubimcima.', vrsta: 'Nemačka doga', starost: 1, velicina: 'Velika', poreklo: 'Nemačka', cena: 50000, recenzije: [{ korisnik: 'Petar', ocena: 5, komentar: 'Savršen pas za trčanje.' }], slika: '/pas4.jpg' },
    { id: 9, ime: 'Morsko prase', opis: 'Veoma razigrana mačka.', vrsta: 'American Short Hair Guinea Pig', starost: 0.5, velicina: 'Mala', poreklo: 'Amerika', cena: 3000, recenzije: [{ korisnik: 'Jovana', ocena: 5, komentar: 'Obožavam!' }], slika: '/morskoprase.jpg' },
    { id: 10, ime: 'Zmija', opis: 'Ova vrsta je poznata po svom mirnom temperamentu i relativno jednostavnom održavanju, što je čini popularnom među početnicima. ', vrsta: 'Kraljevski piton', starost: 5, velicina: 'Velika', poreklo: 'Afrika', cena: 9000, recenzije: [{ korisnik: 'Maja', ocena: 4, komentar: 'Ko voli gmizavce ovo je super izbor.' }], slika: '/zmija.jpg' },
  ];

  constructor(
    private ljubimciService: LjubimciService,
    private authService: AuthService
  ) { }

  rezervisiLjubimac(ljubimac: any): void {
    if (this.isLoggedIn()) {
      this.authService.addToCart(ljubimac); // Dodavanje ljubimca u korpu
      alert('Ljubimac je uspešno rezervisan!');
    } else {
      alert('Morate biti ulogovani da biste izvršili rezervaciju!');
    }
  }

  // Proverite da li je korisnik ulogovan
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  ngOnInit(): void {
  }

}


