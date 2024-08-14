import { Component, importProvidersFrom } from '@angular/core';
import { DestinoService } from '../../servicios/destino.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.css'
})
export class ResultadosComponent {

  constructor(public destinoService: DestinoService){}

  destinoAmerica = "";
  destinoEuropa = "";
  pDestino = "Playa";
  pNanInt = "Nacional";
  pClimatica = "Caluroso";
  pLluvia = "Clima seco";
  pActividad = "Deportes y Aventuras";
  pGastronomia = "Comida Local";
  pAlojamiento = "Hostal o Albergue";
  pCentroAfueras = "Centro de la Ciudad";
  dViaje = "1-2 semanas";
  pDescanso = "1-2 días act.intensas";
  edad = "Menos de 30 años";

  enviarDestino(){

    switch(this.pDestino){
      case "Playa":
        
        switch(this.pClimatica){
          case "Caluroso":
            switch(this.dViaje){
              case "1-2 semanas":
                if(this.edad == "Menos de 30 años" && this.pActividad == "Deportes y Aventuras" && this.pAlojamiento == "Hostal o Albergue"){
                  
                  this.destinoAmerica = "Tulum";
                  this.destinoEuropa = "Ibiza";

                  this.destinoService.destinoA = this.destinoAmerica;
                  this.destinoService.destinoE = this.destinoEuropa;


                } else if(this.edad == "Menos de 30 años" && this.pActividad == "Relax y Bienestar" && this.pAlojamiento == "Hotel de Lujo"){
                  this.destinoAmerica = "Playa del Carmen";
                  this.destinoEuropa = "Santorini";

                } else if(this.edad == "30-50 años" && this.pActividad == "Cultura y Museos" && this.pAlojamiento == "Hotel de Lujo"){
                  this.destinoAmerica = "Honolulu";
                  this.destinoEuropa = "Malta";
                }
                break;
              case "Menos de una semana":
                if(this.edad == "Menos de 30 años" && this.pActividad == "Cultura y Museos" && this.pAlojamiento == "Airbnb"){
                  this.destinoAmerica = "Cartagena";
                  this.destinoEuropa = "Barcelona";
                }
                break;
            }
            break;
          case "Templado":
            switch(this.dViaje){
              case "1-2 semanas":
                if(this.edad == "Menos de 30 años" && this.pActividad == "Cultura y Museos" && this.pAlojamiento == "Hostal o Albergue"){
                  this.destinoAmerica = "San Juan";
                  this.destinoEuropa = "Niza";

                } else if (this.edad == "30-50 años" && this.pActividad == "Cultura y Museos" && this.pAlojamiento == "Hotel de Lujo"){
                  this.destinoAmerica = "Rio de Janeiro";
                  this.destinoEuropa = "Lisboa";
                }

                break;
              case "Más de dos semanas":
                if(this.edad == "Más de 50 años" && this.pActividad == "Relax y Bienestar" && this.pAlojamiento == "Airbnb"){
                  this.destinoAmerica = "Punta Cana";
                  this.destinoEuropa = "Algarve";
                }
                break;
            }
            break;
        }
        break;
      case "Montaña":
        switch(this.pClimatica){
          case "Frío":
            if(this.dViaje == "1-2 semanas"){
              if(this.edad == "Más de 50 años" && this.pAlojamiento == "Airbnb"){
                if(this.pActividad == "Cultura y Museos"){
                  this.destinoAmerica = "Ushuaia";
                  this.destinoEuropa = "Reykjavik";
                } else if (this.pActividad == "Relax y Bienestar"){
                  this.destinoAmerica = "Aspen";
                  this.destinoEuropa = "Innsbruck";
                }
              } else if(this.edad == "Menos de 30 años" && this.pAlojamiento == "Hostal o Albergue" && this.pActividad == "Deportes y Aventuras"){
                  this.destinoAmerica = "Bariloche";
                  this.destinoEuropa = "Interlaken";
              } else if(this.edad == "30-50 años" && this.pAlojamiento == "Hotel de Lujo" && this.pActividad == "Deportes y Aventuras"){
                this.destinoAmerica = "Banff";
                this.destinoEuropa = "Zermatt";
              }
            }
            break;
          case "Templado":
            if(this.edad == "Más de 50 años" && this.pAlojamiento == "Airbnb" && this.pActividad == "Cultura y Museos" && this.dViaje == "1-2 semanas"){
                this.destinoAmerica = "Cusco";
                this.destinoEuropa = "Granada";
            } else if(this.edad == "Menos de 30 años" && this.pAlojamiento == "Airbnb" && this.pActividad == "Deportes y Aventuras" && this.dViaje == "Más de dos semanas"){
              this.destinoAmerica = "Machu Picchu";
              this.destinoEuropa = "Chamonix";
          }
            break;
        }
        break;
      case "Ciudad":
        switch(this.pClimatica){
          case "Caluroso":
            if(this.edad == "Más de 50 años" && this.pAlojamiento == "Hotel de Lujo" && this.pActividad == "Cultura y Museos" && this.dViaje == "1-2 semanas"){
              this.destinoAmerica = "Los Ángeles";
              this.destinoEuropa = "Roma";
            }
            break;
          case "Frío":
            if(this.edad == "30-50 años" && this.pAlojamiento == "Hotel de Lujo" && this.pActividad == "Cultura y Museos" && this.dViaje == "1-2 semanas"){
              this.destinoAmerica = "Toronto";
              this.destinoEuropa = "Berlín";
            }
            break;
          case "Templado":
            if(this.dViaje == "1-2 semanas" && this.pActividad == "Cultura y Museos"){

              if(this.edad == "30-50 años" && this.pAlojamiento == "Hostal o Albergue"){
                this.destinoAmerica = "Ciudad de México";
                this.destinoEuropa = "Madrid";
              } else if(this.edad == "Más de 50 años" && this.pAlojamiento == "Hotel de Lujo"){
                this.destinoAmerica = "Nueva York";
                this.destinoEuropa = "París";
              }
            } else if(this.dViaje == "Menos de una semana"){

              if(this.edad == "Menos de 30 años" && this.pAlojamiento == "Airbnb" && this.pActividad == "Relax y Bienestar"){
                this.destinoAmerica = "Miami";
                this.destinoEuropa = "Viena";
              } else if(this.edad == "30-50 años" && this.pAlojamiento == "Hotel de Lujo" && this.pActividad == "Deportes y Aventuras"){
                this.destinoAmerica = "Chicago";
                this.destinoEuropa = "Londres";
              }
            }
            break;
        }
        break;
    }
    
 }
}
