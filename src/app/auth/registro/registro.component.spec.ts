// Importaciones necesarias para las pruebas de componentes en Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroComponent } from './registro.component';

// Describe un conjunto de pruebas para el componente RegistroComponent
describe('RegistroComponent', () => {
  // Declaración de variables para el componente y su fixture
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  // Configuración antes de cada prueba
  beforeEach(async () => {
    // Configura el módulo de pruebas para el componente
    await TestBed.configureTestingModule({
      imports: [RegistroComponent] // Importa el componente que se va a probar
    })
    .compileComponents(); // Compila los componentes

    // Crea una instancia del componente y su fixture
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance; // Obtiene la instancia del componente
    fixture.detectChanges(); // Detecta cambios en el componente
  });

  // Prueba para verificar que el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que la instancia del componente sea verdadera (exista)
  });
});