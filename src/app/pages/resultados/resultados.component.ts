import { Component, importProvidersFrom } from '@angular/core';
import { DestinoService } from '@services/destino.service';
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
  pDestino = this.destinoService.respuestasSer[0];
  // pNanInt = "Nacional";
  pClimatica = this.destinoService.respuestasSer[1];
  // pLluvia = "Clima seco";
  pActividad = this.destinoService.respuestasSer[2];
  // pGastronomia = "Comida Local";
  pAlojamiento = this.destinoService.respuestasSer[3];
  // pCentroAfueras = "Centro de la Ciudad";
  dViaje = this.destinoService.respuestasSer[4];
  // pDescanso = "1-2 días act.intensas";
  edad = this.destinoService.respuestasSer[5];

  volverAtras(){
    this.destinoService.indice = 5;
    this.destinoService.respuestasSer.pop();
  }


  enviarDestino(){

    switch(this.pDestino){
      case "Playa":
        
        switch(this.pClimatica){
          case "Caluroso":
            switch(this.dViaje){
              case "1-2 semanas":
                if(this.edad == "Menos de 30 años" && this.pActividad == "Deportes y Aventuras" && this.pAlojamiento == "Hostal o Albergue"){

                  this.destinoService.destinoA = "Tulum";
                  this.destinoService.destinoE = "Ibiza";

                } else if(this.edad == "Menos de 30 años" && this.pActividad == "Relax y Bienestar" && this.pAlojamiento == "Hotel de Lujo"){
                  
                  this.destinoService.destinoA = "Playa del Carmen";
                  this.destinoService.destinoE = "Santori";

                } else if(this.edad == "30-50 años" && this.pActividad == "Cultura y Museos" && this.pAlojamiento == "Hotel de Lujo"){
                  
                  
                  this.destinoService.destinoA = "Honolulu";
                  this.destinoService.destinoE = "Malta";
                }
                break;
              case "Menos de una semana":
                if(this.edad == "Menos de 30 años" && this.pActividad == "Cultura y Museos" && this.pAlojamiento == "Airbnb"){
                  
                  
                  this.destinoService.destinoA = "Cartagena";
                  this.destinoService.destinoE = "Barcelona";
                }
                break;
            }
            break;
          case "Templado":
            switch(this.dViaje){
              case "1-2 semanas":
                if(this.edad == "Menos de 30 años" && this.pActividad == "Cultura y Museos" && this.pAlojamiento == "Hostal o Albergue"){
                  
                  
                  this.destinoService.destinoA = "San Juan";
                  this.destinoService.destinoE = "Niza";

                } else if (this.edad == "30-50 años" && this.pActividad == "Cultura y Museos" && this.pAlojamiento == "Hotel de Lujo"){
                  
                  this.destinoService.destinoA = "Río de Janeiro";
                  this.destinoService.destinoE = "Lisboa";


                }

                break;
              case "Más de dos semanas":
                if(this.edad == "Más de 50 años" && this.pActividad == "Relax y Bienestar" && this.pAlojamiento == "Airbnb"){
                  
                  this.destinoService.destinoA = "Punta Cana";
                  this.destinoService.destinoE = "Algarve";

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

                  this.destinoService.destinoA = "Ushuaia";
                  this.destinoService.destinoE = "Reykjavik";


                } else if (this.pActividad == "Relax y Bienestar"){

                  this.destinoService.destinoA = "Aspen";
                  this.destinoService.destinoE = "Innsbruck";

                }
              } else if(this.edad == "Menos de 30 años" && this.pAlojamiento == "Hostal o Albergue" && this.pActividad == "Deportes y Aventuras"){
                  
                this.destinoService.destinoA = "Bariloche";
                this.destinoService.destinoE = "Interlaken";


              } else if(this.edad == "30-50 años" && this.pAlojamiento == "Hotel de Lujo" && this.pActividad == "Deportes y Aventuras"){
                
                this.destinoService.destinoA = "Banff";
                this.destinoService.destinoE = "Zermatt";

                
              }
            }
            break;
          case "Templado":
            if(this.edad == "Más de 50 años" && this.pAlojamiento == "Airbnb" && this.pActividad == "Cultura y Museos" && this.dViaje == "1-2 semanas"){
                
                this.destinoService.destinoA = "Cusco";
                this.destinoService.destinoE = "Granada";


            } else if(this.edad == "Menos de 30 años" && this.pAlojamiento == "Airbnb" && this.pActividad == "Deportes y Aventuras" && this.dViaje == "Más de dos semanas"){
              
                this.destinoService.destinoA = "Machu Picchu";
                this.destinoService.destinoE = "Chamonix";

            }
          break;
        }
        break;
      case "Ciudad":
        switch(this.pClimatica){
          case "Caluroso":
            if(this.edad == "Más de 50 años" && this.pAlojamiento == "Hotel de Lujo" && this.pActividad == "Cultura y Museos" && this.dViaje == "1-2 semanas"){
                
                this.destinoService.destinoA = "Los Angeles";
                this.destinoService.destinoE = "Roma";

            }
            break;
          case "Frío":
            if(this.edad == "30-50 años" && this.pAlojamiento == "Hotel de Lujo" && this.pActividad == "Cultura y Museos" && this.dViaje == "1-2 semanas"){
                
                this.destinoService.destinoA = "Toronto";
                this.destinoService.destinoE = "Berlín";

            }
            break;
          case "Templado":
            if(this.dViaje == "1-2 semanas" && this.pActividad == "Cultura y Museos"){

              if(this.edad == "30-50 años" && this.pAlojamiento == "Hostal o Albergue"){

                this.destinoService.destinoA = "Ciudad de México";
                this.destinoService.destinoE = "Madrid";

              } else if(this.edad == "Más de 50 años" && this.pAlojamiento == "Hotel de Lujo"){
                
                this.destinoService.destinoA = "Nueva York";
                this.destinoService.destinoE = "París";

              }
            } else if(this.dViaje == "Menos de una semana"){

              if(this.edad == "Menos de 30 años" && this.pAlojamiento == "Airbnb" && this.pActividad == "Relax y Bienestar"){
                
                this.destinoService.destinoA = "Miami";
                this.destinoService.destinoE = "Viena";



              } else if(this.edad == "30-50 años" && this.pAlojamiento == "Hotel de Lujo" && this.pActividad == "Deportes y Aventuras"){
                
                this.destinoService.destinoA = "Chicago";
                this.destinoService.destinoE = "Londres";

              }
            }
            break;
        }
        break;
    }

    if(this.destinoService.destinoA == ""){

      this.destinoService.destinoA = "Bora Bora";
      this.destinoService.destinoE = "Dubái";
    }
    
 }
}
