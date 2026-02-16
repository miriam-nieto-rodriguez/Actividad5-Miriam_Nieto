import { Component } from '@angular/core';
import { INoticia } from '../../interface/inoticia.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  arrayNoticias: INoticia[] = [
    {
      titulo: "Nueva apertura en la ciudad",
      imagen: "https://turismodecantabria.com/wp-content/uploads/2023/05/90911f81-faaa-dfe3-1185-798e6fc1e15f.jpg",
      texto: "Hoy se ha inaugurado un nuevo centro cultural en el centro de la ciudad.",
      fecha: "16/02/2026"
    },
    {
      titulo: "Evento deportivo destacado",
      imagen: "https://img.freepik.com/vector-gratis/fondo-torneo-baloncesto-creativo-deporte-alta-energia_1017-53128.jpg?semt=ais_user_personalization&w=740&q=80",
      texto: "El campeonato local de baloncesto finalizó con un gran partido entre los equipos A y B.",
      fecha: "01/02/2026"
    }

  ]

  tituloNuevo = '';
  imagenNueva = '';
  textoNuevo = '';
  fechaNueva = '';


  guardarDatos (){

  }
}
