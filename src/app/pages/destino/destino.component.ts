import { Component } from '@angular/core';
import { DestinoService } from '../../servicios/destino.service';

@Component({
  selector: 'app-destino',
  standalone: true,
  imports: [],
  templateUrl: './destino.component.html',
  styleUrl: './destino.component.css'
})
export class DestinoComponent {

  constructor(public destinoServicio: DestinoService){}

  // america?:string = this.destinoServicio.destinoA;
  // europa?:string = this.destinoServicio.destinoE;

  america = "Playa del Carmen";
  europa = "Santorini"

  srcA = "";
  srcE = "";
  datosA:string [] = [];
  datosE:string [] = [];


  destino(){
    if(this.america == "Playa del Carmen"){

      this.srcA = "../../../assets/img/PlayaDelCarmen.jpg"
      this.srcE = "../../../assets/img/Santorini.jpg"
      this.datosA = ["México","Español","Chichén-Itzá","Salbutes"];
      this.datosE = ["Grecia","Griego","Oia","Hummus de Fava"];

      
    }
  }


}
