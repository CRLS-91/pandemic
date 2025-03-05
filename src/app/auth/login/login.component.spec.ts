// ✅ Importaciones necesarias para las pruebas unitarias
import { ComponentFixture, TestBed } from '@angular/core/testing'; // Importa herramientas de pruebas en Angular
import { LoginComponent } from './login.component'; // Importa el componente a probar

// ✅ Describe el conjunto de pruebas para `LoginComponent`
describe('LoginComponent', () => {
  let component: LoginComponent; // Variable para almacenar el componente
  let fixture: ComponentFixture<LoginComponent>; // Variable para almacenar el entorno de pruebas del componente

  // ✅ Antes de cada prueba, configura el entorno de pruebas
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent] // Carga el `LoginComponent` dentro del entorno de pruebas
    })
    .compileComponents(); // Compila los componentes antes de ejecutar las pruebas

    // ✅ Crea una instancia del componente y su entorno de pruebas
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Aplica cambios detectados en la vista
  });

  // ✅ Prueba básica: verificar que el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que `component` no sea `null` ni `undefined`
  });
});
