import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../../servicios/reports/reports.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destinos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.css']
})
export class DestinosComponent implements OnInit {
  reportData: any[] = [];

  constructor(private reportsService: ReportsService) {}


  ngOnInit(): void {
    this.loadReportData();
  }

  async loadReportData(): Promise<void> {
    try {
      const params = {}; 
      this.reportData = await this.reportsService.getReportData(params);
      console.log({
        esto: this.reportData[0]
      });

    } catch (error) {
      console.error('Error al cargar los datos del reporte:', error);
    }
  }
}