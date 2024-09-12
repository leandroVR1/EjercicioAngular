import { Component } from '@angular/core';
import { ImagenesService } from './imagenes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Galería de imagenes';
  favoritos: any[] = [];
  imagenSeleccionada: any = null;

  constructor(private imagenesService: ImagenesService) {
    this.favoritos = this.imagenesService.getFavoritos();
  }

  seleccionarImagen(imagen: any) {
    this.imagenSeleccionada = imagen;
  }

  esFavorito(imagen: any): boolean {
    return this.imagenesService.esFavorito(imagen);
  }
}
