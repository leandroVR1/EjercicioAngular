import { Component, Input } from '@angular/core';
import { ImagenesService } from 'src/app/imagenes.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {
  @Input() favoritos: any[] = [];

  constructor(private imagenesService: ImagenesService) {
    this.favoritos = this.imagenesService.getFavoritos();
  }

  quitarDeFavoritos(imagen: any) {
    this.imagenesService.toggleFavorito(imagen);
  }
}
