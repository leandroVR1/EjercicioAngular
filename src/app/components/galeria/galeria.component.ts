import { Component, EventEmitter, Output } from '@angular/core';
import { ImagenesService } from 'src/app/imagenes.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  imagenes: any[] = [];
  categoriaSeleccionada: string = '';
  @Output() seleccionarImagen = new EventEmitter<any>();

  constructor(private imagenesService: ImagenesService) {
    this.imagenes = this.imagenesService.getImagenes();
  }

  imagenesFiltradas() {
    if (this.categoriaSeleccionada === '') {
      return this.imagenes;
    }
    return this.imagenes.filter(imagen => imagen.categoria === this.categoriaSeleccionada);
  }

  seleccionarImagenHandler(imagen: any) {
    this.seleccionarImagen.emit(imagen);
  }

  toggleFavorito(imagen: any) {
    this.imagenesService.toggleFavorito(imagen);
  }

  esFavorito(imagen: any): boolean {
    return this.imagenesService.esFavorito(imagen);
  }
}
