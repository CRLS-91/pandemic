import { Component, AfterViewInit } from '@angular/core'; // Importa los decoradores y interfaces necesarios de Angular
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar directivas comunes en el componente
import { ChangeDetectorRef } from '@angular/core'; // Importa ChangeDetectorRef para detectar cambios en el componente
import { HostListener } from '@angular/core'; // Importa HostListener para escuchar eventos del host

@Component({
  selector: 'app-mapa-imagen', // Selector del componente
  standalone: true, // Indica que este componente es independiente
  imports: [CommonModule], // Importa CommonModule para el uso de directivas comunes
  templateUrl: './mapa-imagen.component.html', // Ruta del archivo de plantilla HTML
  styleUrls: ['./mapa-imagen.component.css'] // Ruta del archivo de estilos CSS
})

// Clase del componente que implementa la interfaz AfterViewInit
export class MapaImagenComponent implements AfterViewInit { // Clase del componente que implementa AfterViewInit
  // Constructor que inyecta ChangeDetectorRef para detectar cambios en la vista
  constructor(private cdr: ChangeDetectorRef) {} 

  // Declaración del tipo correcto para `ciudades`
  ciudades: { name: string; group: number; x: number; y: number; connections: string[] }[] = [
    // Array de objetos que representan ciudades con sus propiedades
      { name: 'San Francisco', group: 0, x: 420, y: 620, connections: ['Chicago', 'Los Angeles', 'Manila', 'Tokio'] },
      { name: 'Chicago', group: 0, x: 590, y: 630, connections: ['San Francisco', 'Montreal', 'Atlanta', 'Mexico DF', 'Los Angeles'] },
      { name: 'Atlanta', group: 0, x: 590, y: 710, connections: ['Chicago', 'Miami', 'Washington'] },
      { name: 'Montreal', group: 0, x: 660, y: 590, connections: ['Chicago', 'Nueva York', 'Washington'] },
      { name: 'Nueva York', group: 0, x: 650, y: 650, connections: ['Montreal', 'Washington', 'Londres', 'Madrid'] },
      { name: 'Washington', group: 0, x: 620, y: 660, connections: ['Montreal', 'Nueva York', 'Atlanta', 'Miami'] },
      { name: 'Londres', group: 0, x: 960, y: 560, connections: ['Nueva York', 'Madrid', 'Paris', 'Essen'] },
      { name: 'Madrid', group: 0, x: 950, y: 700, connections: ['Nueva York', 'Londres', 'Paris', 'Sao Paulo', 'Argel'] },
      { name: 'Paris', group: 0, x: 975, y: 600, connections: ['Madrid', 'Londres', 'Essen', 'Argel', 'Milan'] },
      { name: 'Essen', group: 0, x: 1000, y: 560, connections: ['Londres', 'Paris', 'San Petersburgo', 'Milan'] },
      { name: 'Milan', group: 0, x: 1005, y: 630, connections: ['Essen', 'Paris', 'Estambul'] },
      { name: 'San Petersburgo', group: 0, x: 1090, y: 470, connections: ['Essen', 'Estambul', 'Moscu'] },
      { name: 'Los Angeles', group: 3, x: 440, y: 700, connections: ['San Francisco', 'Mexico DF', 'Chicago', 'Sidney'] },
      { name: 'Miami', group: 3, x: 595, y: 810, connections: ['Washington', 'Atlanta', 'Mexico DF', 'Bogota'] },
      { name: 'Mexico DF', group: 3, x: 500, y: 860, connections: ['Los Angeles', 'Miami', 'Chicago', 'Bogota', 'Lima'] },
      { name: 'Bogota', group: 3, x: 610, y: 1040, connections: ['Miami', 'Mexico DF', 'Lima', 'Sao Paulo', 'Buenos Aires'] },
      { name: 'Lima', group: 3, x: 600, y: 1230, connections: ['Mexico DF', 'Bogota', 'Santiago de Chile'] },
      { name: 'Santiago de Chile', group: 3, x: 640, y: 1430, connections: ['Lima'] },
      { name: 'Buenos Aires', group: 3, x: 700, y: 1430, connections: ['Sao Paulo', 'Bogota'] },
      { name: 'Sao Paulo', group: 3, x: 730, y: 1350, connections: ['Bogota', 'Buenos Aires', 'Lagos', 'Madrid'] },
      { name: 'Lagos', group: 3, x: 990, y: 1010, connections: ['Sao Paulo', 'Kinsasa', 'Jartum'] },
      { name: 'Kinsasa', group: 3, x: 1030, y: 1110, connections: ['Lagos', 'Jartum', 'Johannesburgo'] },
      { name: 'Jartum', group: 3, x: 1110, y: 950, connections: ['Lagos', 'Kinsasa', 'Johannesburgo'] },
      { name: 'Johannesburgo', group: 3, x: 1095, y: 1330, connections: ['Kinsasa', 'Jartum'] },
      { name: 'Argel', group: 2, x: 980, y: 750, connections: ['Madrid', 'Paris', 'Estambul', 'El Cairo'] },
      { name: 'El Cairo', group: 2, x: 1100, y: 810, connections: ['Argel', 'Estambul', 'Bagdad'] },
      { name: 'Riad', group: 2, x: 1180, y: 850, connections: ['El Cairo', 'Bagdad', 'Karachi'] },
      { name: 'Estambul', group: 2, x: 1080, y: 680, connections: ['Argel', 'El Cairo', 'Bagdad', 'Moscu'] },
      { name: 'Bagdad', group: 2, x: 1160, y: 750, connections: ['Estambul', 'Karachi', 'Riad', 'El Cairo'] },
      { name: 'Moscu', group: 2, x: 1130, y: 500, connections: ['Teheran', 'Estambul', 'San Petersburgo'] },
      { name: 'Teheran', group: 2, x: 1190, y: 730, connections: ['Moscu', 'Bagdad', 'Karachi', 'Nueva Delhi'] },
      { name: 'Karachi', group: 2, x: 1270, y: 800, connections: ['Teheran', 'Bagdad', 'Nueva Delhi', 'Riad', 'Bombay'] },
      { name: 'Bombay', group: 2, x: 1310, y: 890, connections: ['Karachi', 'Nueva Delhi', 'Madras'] },
      { name: 'Nueva Delhi', group: 2, x: 1315, y: 790, connections: ['Teheran', 'Karachi', 'Bombay', 'Madras', 'Calcuta'] },
      { name: 'Calcuta', group: 2, x: 1360, y: 850, connections: ['Nueva Delhi', 'Hong Kong', 'Madras', 'Bangkok'] },
      { name: 'Madras', group: 2, x: 1335, y: 970, connections: ['Bombay', 'Nueva Delhi', 'Calcuta', 'Bangkok', 'Yakarta'] },
      { name: 'Yakarta', group: 1, x: 1475, y: 1160, connections: ['Madras', 'Bangkok', 'Ho Chi Minh', 'Sidney'] },
      { name: 'Bangkok', group: 1, x: 1440, y: 930, connections: ['Yakarta', 'Calcuta', 'Madras', 'Ho Chi Minh', 'Hong Kong'] },
      { name: 'Hong Kong', group: 1, x: 1500, y: 820, connections: ['Bangkok', 'Ho Chi Minh', 'Taipei', 'Manila', 'Shanghai'] },
      { name: 'Shanghai', group: 1, x: 1510, y: 740, connections: ['Pekin', 'Seul', 'Hong Kong', 'Taipei', 'Tokio'] },
      { name: 'Pekin', group: 1, x: 1480, y: 630, connections: ['Shanghai', 'Seul'] },
      { name: 'Seul', group: 1, x: 1530, y: 660, connections: ['Pekin', 'Tokio'] },
      { name: 'Tokio', group: 1, x: 1590, y: 660, connections: ['San Francisco', 'Seul', 'Osaka', 'Shanghai'] },
      { name: 'Osaka', group: 1, x: 1560, y: 680, connections: ['Tokio', 'Taipei'] },
      { name: 'Taipei', group: 1, x: 1525, y: 820, connections: ['Osaka', 'Hong Kong', 'Shanghai', 'Manila'] },
      { name: 'Ho Chi Minh', group: 1, x: 1470, y: 960, connections: ['Bangkok', 'Hong Kong', 'Manila', 'Yakarta'] },
      { name: 'Manila', group: 1, x: 1535, y: 910, connections: ['San Francisco', 'Ho Chi Minh', 'Taipei', 'Hong Kong', 'Sidney'] },
      { name: 'Sidney', group: 1, x: 1640, y: 1500, connections: ['Los Angeles', 'Manila', 'Yakarta'] },
    ];

  // Objeto para almacenar las coordenadas de las ciudades
  coordenadas: { [key: string]: { top: number; left: number } | undefined} = {};

  // Método que se ejecuta después de que la vista ha sido inicializada
  ngAfterViewInit() {
    this.updateCoordinates(); // Llama a la función para actualizar las coordenadas
  }

  // Escucha el evento de redimensionamiento de la ventana
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateCoordinates(); // Actualiza las coordenadas cuando la ventana se redimensiona
  }

// Método privado para actualizar las coordenadas de las ciudades
private updateCoordinates() {
  const mapContainer = document.querySelector('.map-container') as HTMLElement; // Selecciona el contenedor del mapa

  if (!mapContainer) { // Verifica si el contenedor existe
    console.warn('No se encontró el contenedor del mapa.'); // Muestra un aviso si no se encuentra
    return; // Sale del método si no hay contenedor
  }

  const mapWidth = mapContainer.offsetWidth; // Obtiene el ancho del contenedor del mapa
  const mapHeight = mapContainer.offsetHeight; // Obtiene la altura del contenedor del mapa

  // Calcular coordenadas según el tamaño del mapa
  this.ciudades.forEach(ciudad => { // Itera sobre cada ciudad
    this.coordenadas[ciudad.name] = { // Asigna las coordenadas calculadas a la ciudad
      top: (ciudad.y / 2000) * mapHeight, // Calcula la posición vertical
      left: (ciudad.x / 2000) * mapWidth // Calcula la posición horizontal
    };
  });

  this.cdr.detectChanges(); // Detecta cambios para actualizar la vista
}
}