import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.scss'],
})
export class UsuarioLoginComponent implements OnInit {
  @ViewChild('emailInput') emailInput: ElementRef; // Referencia al campo de entrada de correo electrónico
  @ViewChild('passwordInput') passwordInput: ElementRef; // Referencia al campo de entrada de contraseña

  constructor(private router: Router) {} // Inyecta Router en el constructor

  ngOnInit(): void {
    console.log(
      'El componente UsuarioLoginComponent se ha cargado correctamente.'
    );
  }

  // Método para redirigir a la ruta /dashboard
  login(): void {
    // Aquí podrías agregar lógica de autenticación si es necesario

    // Redirige a la ruta /dashboard
    this.router.navigate(['/dashboard']);
  }
}
