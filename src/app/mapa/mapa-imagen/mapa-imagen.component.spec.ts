import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaImagenComponent } from './mapa-imagen.component';

describe('MapaImagenComponent', () => {
  let component: MapaImagenComponent;
  let fixture: ComponentFixture<MapaImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapaImagenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
