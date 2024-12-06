import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule aquí
import { ChangeDetectorRef } from '@angular/core';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-mapa-imagen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mapa-imagen.component.html',
  styleUrls: ['./mapa-imagen.component.css']

})



  export class MapaImagenComponent implements AfterViewInit {
    constructor(private cdr: ChangeDetectorRef) {}

    // Declaración del tipo correcto para `ciudades`
    ciudades: { name: string; group: number; x: number; y: number; connections: string[] }[] = [
      { name: 'San Francisco', group: 0, x: 470, y: 650, connections: ['Chicago', 'Los Angeles', 'Manila', 'Tokio'] },
      { name: 'Chicago', group: 0, x: 620, y: 630, connections: ['San Francisco', 'Montreal', 'Atlanta', 'Mexico DF', 'Los Angeles'] },
      { name: 'Atlanta', group: 0, x: 610, y: 710, connections: ['Chicago', 'Miami', 'Washington'] },
      { name: 'Montreal', group: 0, x: 680, y: 600, connections: ['Chicago', 'Nueva York', 'Washington'] },
      { name: 'Nueva York', group: 0, x: 660, y: 660, connections: ['Montreal', 'Washington', 'Londres', 'Madrid'] },
      { name: 'Washington', group: 0, x: 660, y: 2000, connections: ['Montreal', 'Nueva York', 'Atlanta', 'Miami'] },
      { name: 'Londres', group: 0, x: 930, y: 2000, connections: ['Nueva York', 'Madrid', 'Paris', 'Essen'] },
      { name: 'Madrid', group: 0, x: 980, y: 700, connections: ['Nueva York', 'Londres', 'Paris', 'Sao Paulo', 'Argel'] },
      { name: 'Paris', group: 0, x: 960, y: 2000, connections: ['Madrid', 'Londres', 'Essen', 'Argel', 'Milan'] },
      { name: 'Essen', group: 0, x: 990, y: 2000, connections: ['Londres', 'Paris', 'San Petersburgo', 'Milan'] },
      { name: 'Milan', group: 0, x: 1000, y: 2000, connections: ['Essen', 'Paris', 'Estambul'] },
      { name: 'San Petersburgo', group: 0, x: 1060, y: 2000, connections: ['Essen', 'Estambul', 'Moscu'] },
      { name: 'Los Angeles', group: 3, x: 470, y: 2000, connections: ['San Francisco', 'Mexico DF', 'Chicago', 'Sidney'] },
      { name: 'Miami', group: 3, x: 620, y: 2000, connections: ['Washington', 'Atlanta', 'Mexico DF', 'Bogota'] },
      { name: 'Mexico DF', group: 3, x: 540, y: 2000, connections: ['Los Angeles', 'Miami', 'Chicago', 'Bogota', 'Lima'] },
      { name: 'Bogota', group: 3, x: 630, y: 2000, connections: ['Miami', 'Mexico DF', 'Lima', 'Sao Paulo', 'Buenos Aires'] },
      { name: 'Lima', group: 3, x: 620, y: 2000, connections: ['Mexico DF', 'Bogota', 'Santiago de Chile'] },
      { name: 'Santiago de Chile', group: 3, x: 660, y: 2000, connections: ['Lima'] },
      { name: 'Buenos Aires', group: 3, x: 710, y: 2000, connections: ['Sao Paulo', 'Bogota'] },
      { name: 'Sao Paulo', group: 3, x: 780, y: 2000, connections: ['Bogota', 'Buenos Aires', 'Lagos', 'Madrid'] },
      { name: 'Lagos', group: 3, x: 980, y: 2000, connections: ['Sao Paulo', 'Kinsasa', 'Jartum'] },
      { name: 'Kinsasa', group: 3, x: 1000, y: 2000, connections: ['Lagos', 'Jartum', 'Johannesburgo'] },
      { name: 'Jartum', group: 3, x: 1100, y: 2000, connections: ['Lagos', 'Kinsasa', 'Johannesburgo'] },
      { name: 'Johannesburgo', group: 3, x: 1070, y: 2000, connections: ['Kinsasa', 'Jartum'] },
      { name: 'Argel', group: 2, x: 970, y: 2000, connections: ['Madrid', 'Paris', 'Estambul', 'El Cairo'] },
      { name: 'El Cairo', group: 2, x: 1070, y: 2000, connections: ['Argel', 'Estambul', 'Bagdad'] },
      { name: 'Riad', group: 2, x: 1130, y: 2000, connections: ['El Cairo', 'Bagdad', 'Karachi'] },
      { name: 'Estambul', group: 2, x: 1050, y: 2000, connections: ['Argel', 'El Cairo', 'Bagdad', 'Moscu'] },
      { name: 'Bagdad', group: 2, x: 1130, y: 2000, connections: ['Estambul', 'Karachi', 'Riad', 'El Cairo'] },
      { name: 'Moscu', group: 2, x: 1130, y: 2000, connections: ['Teheran', 'Estambul', 'San Petersburgo'] },
      { name: 'Teheran', group: 2, x: 1160, y: 2000, connections: ['Moscu', 'Bagdad', 'Karachi', 'Nueva Delhi'] },
      { name: 'Karachi', group: 2, x: 1240, y: 2000, connections: ['Teheran', 'Bagdad', 'Nueva Delhi', 'Riad', 'Bombay'] },
      { name: 'Bombay', group: 2, x: 1270, y: 2000, connections: ['Karachi', 'Nueva Delhi', 'Madras'] },
      { name: 'Nueva Delhi', group: 2, x: 1270, y: 2000, connections: ['Teheran', 'Karachi', 'Bombay', 'Madras', 'Calcuta'] },
      { name: 'Calcuta', group: 2, x: 1300, y: 2000, connections: ['Nueva Delhi', 'Hong Kong', 'Madras', 'Bangkok'] },
      { name: 'Madras', group: 2, x: 1290, y: 2000, connections: ['Bombay', 'Nueva Delhi', 'Calcuta', 'Bangkok', 'Yakarta'] },
      { name: 'Yakarta', group: 1, x: 1390, y: 2000, connections: ['Madras', 'Bangkok', 'Ho Chi Minh', 'Sidney'] },
      { name: 'Bangkok', group: 1, x: 1370, y: 2000, connections: ['Yakarta', 'Calcuta', 'Madras', 'Ho Chi Minh', 'Hong Kong'] },
      { name: 'Hong Kong', group: 1, x: 1420, y: 2000, connections: ['Bangkok', 'Ho Chi Minh', 'Taipei', 'Manila', 'Shanghai'] },
      { name: 'Shanghai', group: 1, x: 1420, y: 2000, connections: ['Pekin', 'Seul', 'Hong Kong', 'Taipei', 'Tokio'] },
      { name: 'Pekin', group: 1, x: 1410, y: 2000, connections: ['Shanghai', 'Seul'] },
      { name: 'Seul', group: 1, x: 1460, y: 2000, connections: ['Pekin', 'Tokio'] },
      { name: 'Tokio', group: 1, x: 1500, y: 2000, connections: ['San Francisco', 'Seul', 'Osaka', 'Shanghai'] },
      { name: 'Osaka', group: 1, x: 1490, y: 2000, connections: ['Tokio', 'Taipei'] },
      { name: 'Taipei', group: 1, x: 1450, y: 2000, connections: ['Osaka', 'Hong Kong', 'Shanghai', 'Manila'] },
      { name: 'Ho Chi Minh', group: 1, x: 1400, y: 2000, connections: ['Bangkok', 'Hong Kong', 'Manila', 'Yakarta'] },
      { name: 'Manila', group: 1, x: 1470, y: 2000, connections: ['San Francisco', 'Ho Chi Minh', 'Taipei', 'Hong Kong', 'Sidney'] },
      { name: 'Sidney', group: 1, x: 1550, y: 2000, connections: ['Los Angeles', 'Manila', 'Yakarta'] },
    ];

  coordenadas: { [key: string]: { top: number; left: number } | undefined} = {};

  ngAfterViewInit() {
    this.updateCoordinates();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateCoordinates();
  }

  private updateCoordinates() {
    const mapContainer = document.querySelector('.map-container') as HTMLElement;

    if (!mapContainer) {
      console.warn('No se encontró el contenedor del mapa.');
      return;
    }

    const mapWidth = mapContainer.offsetWidth;
    const mapHeight = mapContainer.offsetHeight;

    // Calcular coordenadas según el tamaño del mapa
    this.ciudades.forEach(ciudad => {
      this.coordenadas[ciudad.name] = {
        top: (ciudad.y / 2000) * mapHeight, // Ajustar según proporción esperada
        left: (ciudad.x / 2000) * mapWidth // Ajustar según proporción esperada
      };
    });

    this.cdr.detectChanges();
  }
  
}
