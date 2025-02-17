import { Injectable } from '@angular/core';
import {Ljubimac} from "../models/ljubimac.model";

@Injectable({
  providedIn: 'root'
})
export class LjubimciService {
  ljubimci: Ljubimac[] = [
    { id: 1, ime: 'Pas 1', opis: 'Opis za psa', vrsta: 'Pas', starost: 3, velicina: 'Srednja', poreklo: 'Srbija', cena: 15000, recenzije: [{ korisnik: 'Marko', ocena: 5, komentar: 'Odličan pas!' }] },
    { id: 2, ime: 'Mačka 1', opis: 'Opis za mačku', vrsta: 'Mačka', starost: 2, velicina: 'Mala', poreklo: 'Rusija', cena: 10000, recenzije: [{ korisnik: 'Jelena', ocena: 4, komentar: 'Lepa mačka, ljubazna.' }] }
    // Dodaj još ljubimaca ovde...
  ];

  // Filtriraj ljubimce na osnovu kriterijuma
  filterLjubimci(kriterijumi: any): Ljubimac[] {
    return this.ljubimci.filter(ljubimac => {
      return (
        (kriterijumi.ime ? ljubimac.ime.toLowerCase().includes(kriterijumi.ime.toLowerCase()) : true) &&
        (kriterijumi.opis ? ljubimac.opis.toLowerCase().includes(kriterijumi.opis.toLowerCase()) : true) &&
        (kriterijumi.vrsta ? ljubimac.vrsta.toLowerCase().includes(kriterijumi.vrsta.toLowerCase()) : true) &&
        (kriterijumi.starost ? ljubimac.starost === kriterijumi.starost : true) &&
        (kriterijumi.velicina ? ljubimac.velicina.toLowerCase().includes(kriterijumi.velicina.toLowerCase()) : true) &&
        (kriterijumi.poreklo ? ljubimac.poreklo.toLowerCase().includes(kriterijumi.poreklo.toLowerCase()) : true) &&
        (kriterijumi.cena ? ljubimac.cena <= kriterijumi.cena : true) &&
        (kriterijumi.recenzije ? ljubimac.recenzije.some(rec => rec.korisnik.toLowerCase().includes(kriterijumi.recenzije.toLowerCase())) : true)
      );
    });
  }
}

