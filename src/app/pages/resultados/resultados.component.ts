import { Component, ChangeDetectorRef } from '@angular/core';
import { DestinoService } from '@services/destino.service';
import { DestinoSharedService } from '@services/destino-shared.service'; // Importar el servicio compartido
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.css',
})
export class ResultadosComponent {
  nomUsuario: string;
  correoUsuario: string;
  avatar: string;

  constructor(
    public destinoService: DestinoService,
    private destinoSharedService: DestinoSharedService, // Inyectar el servicio compartido
    private cdr: ChangeDetectorRef
  ) {
    this.nomUsuario = sessionStorage.getItem('nomUsuario') || '';
    this.correoUsuario = sessionStorage.getItem('correoUsuario') || '';
    this.avatar = sessionStorage.getItem('avatar') || '';

    // Loguear la información para verificar que se están recibiendo los datos
    console.log('Nombre de Usuario:', this.nomUsuario);
    console.log('Correo de Usuario:', this.correoUsuario);
    console.log('Avatar:', this.avatar);
  }

  destinoAmerica = '';
  destinoEuropa = '';
  pDestino = this.destinoService.respuestasSer[0];
  pClimatica = this.destinoService.respuestasSer[1];
  pActividad = this.destinoService.respuestasSer[2];
  pAlojamiento = this.destinoService.respuestasSer[3];
  dViaje = this.destinoService.respuestasSer[4];
  edad = this.destinoService.respuestasSer[5];

  volverAtras() {
    this.destinoService.indice = 5;
    this.destinoService.respuestasSer.pop();
  }

  enviarDestino() {
    this.destinoSharedService.enviarDestino(this.nomUsuario, this.correoUsuario)
      .then(() => {
        this.cdr.detectChanges(); // Forzar la detección de cambios
      });
  }
}