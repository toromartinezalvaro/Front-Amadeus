import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DestinoService } from '@services/destino.service';
import { DestinoSharedService } from '@services/destino-shared.service';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-destino',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './destino.component.html',
  styleUrl: './destino.component.css',
})
export class DestinoComponent implements OnInit {
  constructor(
    public destinoService: DestinoService,
    private destinoSharedService: DestinoSharedService,
    private cdr: ChangeDetectorRef
  ) {}

  control: boolean = true;

  destinos: any[] = [];
  destino1: any = {};
  destino2: any = {};

  ngOnInit(): void {
    setTimeout(() => {
      this.destino();
    }, 5);
  }

  async enviarDestino() {
    const nomUsuario = sessionStorage.getItem('nomUsuario') || '';
    const correoUsuario = sessionStorage.getItem('correoUsuario') || '';
    await this.destinoSharedService
      .enviarDestino(nomUsuario, correoUsuario)
      .then(() => {
        this.cdr.detectChanges();
      });
  }

  async destino() {
    await this.enviarDestino();

    const destinosString = sessionStorage.getItem('destinos');
    const destinos = destinosString ? JSON.parse(destinosString) : [];

    this.destino1 = destinos.length > 0 ? destinos[0] : {};
    this.destino2 = destinos.length > 1 ? destinos[1] : {};

    console.log({ destinos, destino1: this.destino1, destino2: this.destino2 });

    sessionStorage.getItem('destinoAmerica') === 'Bora Bora'
      ? (this.control = false)
      : (this.control = true);

    await this.destinoService
      .getDestinity(
        `http://localhost:8084/api/v1/destinos/ids?ids=${destinos[0].id}&ids=${destinos[1].id}`
      )
      .then((response) => {
        console.log({ DESTINOS: response });
        this.destino1 = response[0];
        this.destino2 = response[1];
        this.cdr.detectChanges();
      })
      .catch((error) => {
        console.error('Error', error);
      });
  }
}
