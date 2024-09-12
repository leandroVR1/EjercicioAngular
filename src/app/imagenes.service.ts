import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  private imagenes = [
    { id: 1, titulo: 'Montaña', descripcion: 'Una hermosa vista de la montaña.', categoria: 'Naturaleza', url: 'assets/montaña.jpg', fecha: '2024-09-10' },
    { id: 2, titulo: 'Pastel', descripcion: 'Un pastel de chocolate', categoria: 'Gastronomia', url: 'assets/pastel.jpg', fecha: '2024-09-11' },
    { id: 3, titulo: 'Playa', descripcion: 'Una playa relajante al atardecer.', categoria: 'Naturaleza', url: 'assets/playa.jpg', fecha: '2024-09-12' },
    { id: 4, titulo: 'Tecnología', descripcion: 'Un dispositivo de última generación.', categoria: 'Tecnología', url: 'assets/dron.jpg', fecha: '2024-09-13' }
    
  ];

  private favoritos: any[] = [];

  getImagenes() {
    return this.imagenes;
  }

  getFavoritos() {
    return this.favoritos;
  }

  toggleFavorito(imagen: any) {
    const index = this.favoritos.indexOf(imagen);
    if (index === -1) {
      this.favoritos.push(imagen);
    } else {
      this.favoritos.splice(index, 1);
    }
  }

  esFavorito(imagen: any): boolean {
    return this.favoritos.includes(imagen);
  }
}
