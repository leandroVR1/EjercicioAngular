import { Component } from '@angular/core';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],

})
export class GaleriaComponent {
  imagenes = [
    { id: 1, titulo: 'Montaña', descripcion: 'Una hermosa vista de la montaña.', categoria: 'Naturaleza', url: 'assets/montana.jpg', fecha: '2024-09-10' },
    { id: 2, titulo: 'Ciudad', descripcion: 'Una ciudad moderna con rascacielos.', categoria: 'Ciudad', url: 'assets/ciudad.jpg', fecha: '2024-09-11' },
    { id: 3, titulo: 'Playa', descripcion: 'Una playa relajante al atardecer.', categoria: 'Naturaleza', url: 'assets/playa.jpg', fecha: '2024-09-12' },
    { id: 4, titulo: 'Tecnología', descripcion: 'Un dispositivo de última generación.', categoria: 'Tecnología', url: 'assets/tecnologia.jpg', fecha: '2024-09-13' }
  ];

  // Variable para almacenar la categoría seleccionada en el filtro
  categoriaSeleccionada: string = '';

  // Variable para almacenar la imagen seleccionada para mostrar detalles
  imagenSeleccionada: any = null;

  // Lista de imágenes favoritas
  favoritos: any[] = [];

  // Método para filtrar las imágenes por categoría seleccionada
  imagenesFiltradas() {
    if (this.categoriaSeleccionada === '') {
      return this.imagenes;
    }
    return this.imagenes.filter(imagen => imagen.categoria === this.categoriaSeleccionada);
  }

  // Método para seleccionar una imagen y mostrar sus detalles
  

  seleccionarImagen(imagen: any) {
    this.imagenSeleccionada = imagen;
  }
  

  // Método para marcar o desmarcar una imagen como favorita
  toggleFavorito(imagen: any) {
    const index = this.favoritos.indexOf(imagen);
    if (index === -1) {
      this.favoritos.push(imagen);
    } else {
      this.favoritos.splice(index, 1);
    }
  }

  // Método para verificar si una imagen es favorita
  esFavorito(imagen: any): boolean {
    return this.favoritos.includes(imagen);
  }
}
