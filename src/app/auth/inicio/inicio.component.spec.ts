import { ComponentFixture, TestBed } from '@angular/core/testing'; // Importa las herramientas necesarias para realizar pruebas en Angular


import { InicioComponent } from './inicio.component'; // Importa el componente que se va a probar


describe('InicioComponent', () => { // Describe el conjunto de pruebas para el componente Inicio

  let component: InicioComponent; // Declara una variable para el componente que se va a probar

  let fixture: ComponentFixture<InicioComponent>; // Declara una variable para el fixture del componente


  beforeEach(async () => { // Configura el entorno de prueba antes de cada prueba

    await TestBed.configureTestingModule({ // Configura el módulo de prueba para el componente

      imports: [InicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { // Prueba que el componente se crea correctamente

    expect(component).toBeTruthy();
  });
});
