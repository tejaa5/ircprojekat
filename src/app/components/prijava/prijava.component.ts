import { Component } from '@angular/core';
import {AuthService} from "../../services/AuthService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrl: './prijava.component.css',
  standalone: false
})
export class PrijavaComponent {

  email: string = '';
  lozinka: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  prijaviSe(): void {
    const isValid = this.authService.login(this.email, this.lozinka);

    if (isValid) {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Pogrešan email ili lozinka!';
    }
  }

}

