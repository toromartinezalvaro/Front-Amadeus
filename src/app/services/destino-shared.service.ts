import { Injectable } from '@angular/core';
import { DestinoService } from '@services/destino.service';

@Injectable({
  providedIn: 'root',
})
export class DestinoSharedService {
  constructor(private destinoService: DestinoService) {}

  async enviarDestino(nomUsuario: string, correoUsuario: string) {
    const data = {
      nombre: nomUsuario,
      email: correoUsuario,
      entorno: sessionStorage.getItem('respuesta_0'), 
      clima: sessionStorage.getItem('respuesta_1'), 
      actividad: sessionStorage.getItem('respuesta_2'), 
      alojamiento: sessionStorage.getItem('respuesta_3'), 
      tiempo_viaje: sessionStorage.getItem('respuesta_4'), 
      rango_edad: sessionStorage.getItem('respuesta_5'),
    };

    console.log('esto es lo que está devolviendo', { data });

    return await this.destinoService
      .sendDestinity('preferencias', data)
      .then((response) => {
        console.log('Datos de la API:', response);

        this.destinoService.destinoA = response.destinos[0].nombre;
        this.destinoService.destinoE = response.destinos[1].nombre;
        this.destinoService.destinos = response.destinos;

        sessionStorage.setItem('destinoAmerica', response.destinos[0].nombre);
        sessionStorage.setItem('destinoEuropa', response.destinos[1].nombre);
        sessionStorage.setItem('destinos', JSON.stringify(response.destinos));

        console.log('Destino A:', this.destinoService.destinoA);
        console.log('Destino E:', this.destinoService.destinoE);
      })
      .catch((error) => {
        console.error('Error al enviar destino:', error);
      });
  }
}