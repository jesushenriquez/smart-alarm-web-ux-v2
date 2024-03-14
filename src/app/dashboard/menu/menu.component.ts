import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  dashboard(): void {
    // Aquí podrías agregar lógica de autenticación si es necesario
    // Redirige a la ruta /dashboard
    this.router.navigate(['/dashboard']);
  }
  usuarios(): void {
    // Aquí podrías agregar lógica de autenticación si es necesario
    // Redirige a la ruta /dashboard
    this.router.navigate(['/usuarios']);
  }

  exit(): void {
    // Aquí podrías agregar lógica de autenticación si es necesario
    // Redirige a la ruta /dashboard
    this.router.navigate(['/']);
  }
}
