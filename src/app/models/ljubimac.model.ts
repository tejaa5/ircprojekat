export interface Ljubimac {
  id: number;
  ime: string;
  opis: string;
  vrsta: string; // npr. pas, mačka, ptica, itd.
  starost: number; // Starost u godinama
  velicina: string; // npr. mala, srednja, velika
  poreklo: string; // Poreklo ljubimca
  cena: number; // Cena ljubimca
  recenzije: { korisnik: string; ocena: number; komentar: string }[]; // Recenzije korisnika
}
