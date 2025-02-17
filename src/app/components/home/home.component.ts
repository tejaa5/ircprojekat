import { Component } from '@angular/core';
import {LjubimciService} from "../../services/ljubimci.service";
import {Ljubimac} from "../../models/ljubimac.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ljubimci: Ljubimac[] = [];
  kriterijumi: any = {
    ime: '',
    opis: '',
    vrsta: '',
    starost: null,
    velicina: '',
    poreklo: '',
    cena: null,
    recenzije: ''
  };

  constructor(private ljubimciService: LjubimciService) {
    this.ljubimci = this.ljubimciService.filterLjubimci(this.kriterijumi);
  }

  pretrazi() {
    this.ljubimci = this.ljubimciService.filterLjubimci(this.kriterijumi);
  }
}


