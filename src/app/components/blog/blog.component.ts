import { Component } from '@angular/core';
import { INoticia } from '../../interface/inoticia.interface';
import { FormsModule } from '@angular/forms';
import { NOTICIAS } from '../db/noticias.db';

@Component({
  selector: 'app-blog',
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {

  arrayNoticias: INoticia[] = NOTICIAS;
  
  nuevaNoticia: INoticia = {
    imagen: '',
    titulo: '',
    texto: '',
    fecha: '',
    
  }

  guardarDatos() {
    const { imagen, titulo, texto, fecha } = this.nuevaNoticia;
    if (imagen && titulo && texto && fecha) {

      this.arrayNoticias.push({ ...this.nuevaNoticia });

      this.nuevaNoticia = { imagen: '', titulo: '', texto: '', fecha: '' };
      
    } else {
      alert('Todos los campos son obligatorios');
      
    }
  }

}

