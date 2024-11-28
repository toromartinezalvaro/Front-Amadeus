import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../../servicios/reports/reports.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuariosData: any[] = [];
  preferenciasUsuario: { [email: string]: any[] } = {}; 
  visibilidadPreferencias: { [email: string]: boolean } = {};

  constructor(private reportsService: ReportsService) {}

  ngOnInit(): void {
    this.loadUsuariosData();
  }

  async loadUsuariosData(): Promise<void> {
    try {
      this.usuariosData = await this.reportsService.getUsuariosData();
      console.log('Datos de usuarios:', this.usuariosData);
    } catch (error) {
      console.error('Error al cargar los datos de usuarios:', error);
    }
  }

  async loadPreferenciasUsuario(email: string): Promise<void> {
    try {
      if (!this.preferenciasUsuario[email]) {
        const preferencias = await this.reportsService.getPreferenciasUsuario(email);
        console.log(`Preferencias del usuario ${email}:`, preferencias);
        this.preferenciasUsuario[email] = preferencias[0].destinos; // Almacenar las preferencias del usuario
        console.log({preferencias: preferencias[0].destinos});
      }
      this.visibilidadPreferencias[email] = !this.visibilidadPreferencias[email]; // Alternar visibilidad
    } catch (error) {
      console.error('Error al cargar las preferencias del usuario:', error);
    }
  }
}