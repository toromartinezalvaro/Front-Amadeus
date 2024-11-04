import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DestinoService } from '@services/destino.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

  constructor(public destinoService: DestinoService){}

  slideIndex: number = 1;

  ngOnInit() {
    this.showSlides(this.slideIndex);
  }

  plusSlides(n: number): void {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number): void {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number): void {
    let i: number;
    let slides: HTMLCollectionOf<Element> = document.getElementsByClassName("container__main__card__avatar--img");
    let dots: HTMLCollectionOf<Element> = document.getElementsByClassName("dot");
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      (slides[i] as HTMLElement).style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    (slides[this.slideIndex - 1] as HTMLElement).style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }

  nombre = new FormControl();
  correo = new FormControl(); 

  datosUsuario(){

    this.destinoService.nombreS = this.nombre.value;
    this.destinoService.correoS = this.correo.value;
    
    switch(this.slideIndex){
      case 1: {
        this.destinoService.avatar = "../../../assets/img/img-avatar/ava11.png";
        break;
      }
      case 2: {
        this.destinoService.avatar = "../../../assets/img/img-avatar/ava12.png";
        break;
      }
      case 3: {
        this.destinoService.avatar = "../../../assets/img/img-avatar/ava13.png";
        break;
      }
      case 4: {
        this.destinoService.avatar = "../../../assets/img/img-avatar/ava14.png";
        break;
      }
    }

  }

  estadoCorreo = "";
  controlBoton = true;

  verificarNomb(event: Event){

    let nomUsuario = this.nombre.value;

    if (nomUsuario == ""){
      this.estadoCorreo = 'Escribe su nombre';
    }
  }

  
  verificarCorreo(event: Event): void {
    
    const regEmail = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    const correoUsuario = this.correo.value;
    
    const checkbox = document.getElementById('data-accepted') as HTMLInputElement;

    if (!regEmail.test(correoUsuario) || !checkbox.checked) {
      if (!regEmail.test(correoUsuario)) {
        this.estadoCorreo = 'Correo no válido';
      } else if (!checkbox.checked) {
        this.estadoCorreo = 'Debe aceptar los términos y condiciones';
      }
      this.controlBoton = true;
    } else {
      this.estadoCorreo = '';
      this.controlBoton = false;
    }

    // Ensure the checkbox value is updated correctly
    checkbox.addEventListener('change', () => {
      this.verificarCorreo(event);
    });
  }

}
