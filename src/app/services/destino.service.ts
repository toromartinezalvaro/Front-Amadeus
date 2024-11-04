import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class DestinoService {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: 'http://localhost:8080/api/', // URL base para las solicitudes
      // timeout: 5000,
    });
  }

  /**
   * Método para enviar datos a un destino específico.
   * @param endpoint - El endpoint al que se realizará la solicitud POST.
   * @param data - Datos que se enviarán en el cuerpo de la solicitud.
   * @returns Una promesa que se resuelve con los datos de la respuesta del servidor.
   * @throws Error si ocurre un problema durante la solicitud.
   */
  async sendDestinity(endpoint: string, data: any): Promise<any> {
    try {
      const response = await this.axiosClient.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('Error', error);
      throw error;
    }
  }

  indice:number = 0;
  destinoA:String = "";
  destinoE:String = "";
  respuestasSer:String[] = [];
  nombreS:String = "";
  correoS:String = "";
  avatar: String = "https://cdn-icons-png.flaticon.com/512/9187/9187532.png";
  srcA: String = "";
  srcE: String = "";
}
