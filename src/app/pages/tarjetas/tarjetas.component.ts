import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  standalone: true,
  imports: [],
  templateUrl: './tarjetas.component.html',
  styleUrl: './tarjetas.component.css'
})
export class TarjetasComponent {

  indice = 0;

  preguntaA = ["¿Que tipo de entorno prefieres para tus vacaciones?",
    "¿Que clima prefieres durante tus vacaciones?",
    "¿Que tipo de actividades prefieres hacer durante tus vacaciones?",
    "¿Que tipo de alojamiento prefieres?",
    "¿Cuánto tiemplo planeas quedarte de vacaciones?" ,
    "¿Cuál es tu rango de edad?"
  ];

  opcionesA = [
    ["Playa","Montaña","Ciudad"],
    ["Caluroso","Templado","Frio"],
    ["Deportes y Aventuras","Cultura y Museos","Relax y Bienestar"],
    ["Hotel de Lujo","Hostal o Albergue","Airbnb o Apartamento"],
    ["Menos de una semana","Una a dos semanas","Más de dos semanas"],
    ["Menos de 30 años","30-50 años","Más de 50 años"]
  ]

  imgUrl =[
    ["../../../assets/img/imagen1.jpg","../../../assets/img/imagen2.jpg","../../../assets/img/imagen3.jpg"],
    ["../../../assets/img/Tulum.jpg","../../../assets/img/Templado.jpg","../../../assets/img/Frio.jpg"],
    ["../../../assets/img/Aventura.jpg","../../../assets/img/cultura.jpg","../../../assets/img/relax.jpg"],
    ["../../../assets/img/hotelujo.jpg","../../../assets/img/hostal.jpg","../../../assets/img/airbnb.jpg"],
    ["../../../assets/img/findesemana.jpg","../../../assets/img/dosemanas.jpg","../../../assets/img/calendario.jpg"],
    ["../../../assets/img/veinte.jpg","../../../assets/img/treinta.jpg","../../../assets/img/cincuenta.jpg"]
  ]

  dato = [
    ["Las playas no siempre son doradas?. Hay playas con arena negra volcánica, rosa coralina y hasta verde olivo. ¡Cada grano de arena cuenta una historia!",
      "Las montañas tienen su propio clima?. Al subir una montaña, puedes experimentar diferentes climas en pocos kilómetros. ¡Es como viajar por el mundo sin salir de una misma montaña!",
      "Muchas ciudades tienen secretos subterráneos?. Bajo las calles de muchas ciudades se encuentran redes de túneles, ríos subterráneos y hasta antiguas ruinas. París, por ejemplo, tiene más de 200 kilómetros de túneles subterráneos."
    ],
    ["En muchos lugares con clima cálido se celebran festivales y eventos al aire libre, aprovechando las altas temperaturas.",
      "Muchas de las rutas turísticas más famosas del mundo se encuentran en regiones con clima templado, como la Ruta de la Costa Amalfitana en Italia o la Ruta 66 en Estados Unidos.",
      "En lugares con clima frío, el turismo se concentra principalmente en los meses de invierno, cuando la nieve cubre el paisaje y se pueden practicar deportes como el esquí, el snowboard y el patinaje sobre hielo."
    ],
    ["Desde las montañas de Nepal hasta los ríos de Costa Rica, existen numerosos destinos que ofrecen experiencias únicas para los amantes de la adrenalina.",
      "Al visitar los museos, los viajeros pueden imaginar cómo era la vida en la corte real y apreciar la arquitectura y el diseño de una época pasada.",
      "Al visitar un baño termal, los viajeros pueden conectar con las tradiciones de culturas antiguas y experimentar una forma de relajación que ha sido practicada durante siglos."
    ],
    ["Algunos de los hoteles más lujosos del mundo ofrecen experiencias tan exclusivas que incluyen la posibilidad de tener un mayordomo personal que se encargue de todos tus caprichos, desde preparar un baño relajante hasta reservar una mesa en el restaurante más exclusivo de la ciudad",
      "Muchos de los hostales y albergues más populares del mundo se encuentran ubicados en edificios históricos o con una arquitectura única",
      "Airbnb o apartamento:Airbnb nació de una necesidad de alojamiento económico durante un evento en San Francisco."
    ],
    ["Estudios han demostrado que incluso viajes cortos pueden tener un impacto significativo en la reducción del estrés y la mejora del estado de ánimo.",
      "Estudios han demostrado que este rango de tiempo permite sumergirte en la cultura local, conocer a fondo un lugar y crear recuerdos duraderos sin sentirte apresurado o abrumado.",
      "Viajes prolongados te permiten desconectar completamente de tu rutina diaria y volver a casa sintiéndote renovado y con una nueva perspectiva de la vida."
    ],
    ["Viajar en la veintena te ayuda a desarrollar habilidades como la independencia, la adaptabilidad y la tolerancia a la incertidumbre, lo cual es fundamental para tu crecimiento personal.",
      "A menudo, se busca ir más allá de los destinos turísticos más populares y descubrir lugares menos conocidos, con una mayor conexión con la cultura local.",
      "Muchos viajeros mayores se unen a grupos organizados para conocer a personas con intereses similares y compartir experiencias."
    ]
  ]

  pregunta = this.preguntaA[this.indice];
  opcion1 = this.opcionesA[this.indice][0];
  opcion2 = this.opcionesA[this.indice][1];
  opcion3 = this.opcionesA[this.indice][2];
  img1 = this.imgUrl[this.indice][0];
  img2 = this.imgUrl[this.indice][1];
  img3 = this.imgUrl[this.indice][2];
  dato1 = this.dato[this.indice][0];
  dato2 = this.dato[this.indice][1];
  dato3 = this.dato[this.indice][2];


  preferencias = [6];

siguiente () {

  this.indice++;

  this.pregunta = this.preguntaA[this.indice];
  this.opcion1 = this.opcionesA[this.indice][0];
  this.opcion2 = this.opcionesA[this.indice][1];
  this.opcion3 = this.opcionesA[this.indice][2];
  this.img1 = this.imgUrl[this.indice][0];
  this.img2 = this.imgUrl[this.indice][1];
  this.img3 = this.imgUrl[this.indice][2];
  this.dato1 = this.dato[this.indice][0];
  this.dato2 = this.dato[this.indice][1];
  this.dato3 = this.dato[this.indice][2];

}

atras() {

  this.indice--;

  this.pregunta = this.preguntaA[this.indice];
  this.opcion1 = this.opcionesA[this.indice][0];
  this.opcion2 = this.opcionesA[this.indice][1];
  this.opcion3 = this.opcionesA[this.indice][2];
  this.img1 = this.imgUrl[this.indice][0];
  this.img2 = this.imgUrl[this.indice][1];
  this.img3 = this.imgUrl[this.indice][2];
  this.dato1 = this.dato[this.indice][0];
  this.dato2 = this.dato[this.indice][1];
  this.dato3 = this.dato[this.indice][2];

}

}
