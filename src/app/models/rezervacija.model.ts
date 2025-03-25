export interface Rezervacija {
  naziv: string;
  opis: string;
  vrsta: string;
  starost: number;
  velicina: string;
  poreklo: string;
  cena: number;
  status: 'preuzeto' | 'u toku' | 'otkazano';
  ocena?: number; // Samo za porudžbine sa statusom 'preuzeto'
}
