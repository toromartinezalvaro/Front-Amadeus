import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DestinoService {

  constructor() { }
  
  indice:number = 0;
  destinoA:String = "";
  destinoE:String = "";
  respuestasSer:String[] = [];
  nombreS:String = "";
  correoS:String = "";
  avatar: String = "";
  srcA: String = "";
  srcE: String = "";

}
