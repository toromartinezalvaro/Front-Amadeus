import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private baseUrl = "http://localhost:8084/api/v1";

  async getReportData(params: any): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/destinos`, { params });

      return response.data;
    } catch (error) {
      console.error('Error al obtener los datos del reporte:', error);
      throw error;
    }
  }

  async getPreferenciasData(): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/preferencias`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los datos de preferencias:', error);
      throw error;
    }
  }

  async getUsuariosData(): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/usuarios`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los datos de usuarios:', error);
      throw error;
    }
  }

  async getPreferenciasUsuario(email: string): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/preferencias/usuario/${encodeURIComponent(email)}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener las preferencias del usuario:', error);
      throw error;
    }
  }
}
