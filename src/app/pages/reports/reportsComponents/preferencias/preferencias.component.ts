import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../../servicios/reports/reports.service';
import { CommonModule } from '@angular/common';
import { PreferenciasLabels } from '../../../../shared/enums/preferencias-labels.enum';

// Definición de la interfaz
interface Preferencia {
  entorno: keyof typeof PreferenciasLabels; // Claves del enum
  clima: keyof typeof PreferenciasLabels;
  actividad: keyof typeof PreferenciasLabels;
  alojamiento: keyof typeof PreferenciasLabels;
  tiempoViaje: keyof typeof PreferenciasLabels;
  rangoEdad: keyof typeof PreferenciasLabels;
  destinoResponseList: { nombre: string; nombre_continente: string }[];
}

@Component({
  selector: 'app-preferencias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preferencias.component.html',
  styleUrls: ['./preferencias.component.css']
})
export class PreferenciasComponent implements OnInit {
  // Cambiamos el tipo de `preferenciasData` a Preferencia[]
  preferenciasData: Preferencia[] = [];
  preferenciasLabels = PreferenciasLabels;

  constructor(private reportsService: ReportsService) {}

  ngOnInit(): void {
    this.loadPreferenciasData();
  }

  async loadPreferenciasData(): Promise<void> {
    try {
      // Aquí aseguramos que los datos cumplen con la estructura de Preferencia
      this.preferenciasData = await this.reportsService.getPreferenciasData() as Preferencia[];
      console.log('Datos de preferencias:', this.preferenciasData);
    } catch (error) {
      console.error('Error al cargar los datos de preferencias:', error);
    }
  }
}
