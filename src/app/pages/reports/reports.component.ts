import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinosComponent } from './reportsComponents/destinos/destinos.component';
import { UsuariosComponent } from './reportsComponents/usuarios/usuarios.component';
import { PreferenciasComponent } from './reportsComponents/preferencias/preferencias.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, DestinosComponent, UsuariosComponent, PreferenciasComponent],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  selectedMenu: string = 'destinos';

  constructor() {}

  ngOnInit(): void {}

  selectMenu(menu: string): void {
    this.selectedMenu = menu;
  }
}
