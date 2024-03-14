import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [UsuarioLoginComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
  ],
  exports: [UsuarioLoginComponent],
})
export class UsuarioModule {}
