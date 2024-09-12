import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detalle-imagen',
  templateUrl: './detalle-imagen.component.html',
  styleUrls: ['./detalle-imagen.component.css']
})
export class DetalleImagenComponent {
  @Input() imagen: any;
  @Output() cerrar = new EventEmitter<void>();

  cerrarModal() {
    this.cerrar.emit();
  }
}
