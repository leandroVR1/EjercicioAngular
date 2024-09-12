import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-imagen',
 
  templateUrl: './detalle-imagen.component.html',
 
})
export class DetalleImagenComponent {
  @Input() imagen: any;
}
