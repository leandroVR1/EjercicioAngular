import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleImagenComponent } from './detalle-imagen.component';

describe('DetalleImagenComponent', () => {
  let component: DetalleImagenComponent;
  let fixture: ComponentFixture<DetalleImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleImagenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
