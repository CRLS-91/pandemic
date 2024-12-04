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
      { name: 'San Francisco', group: 0, x: 440, y: 290, connections: ['Chicago', 'Los Angeles', 'Manila', 'Tokio'] },
    { name: 'Chicago', group: 0, x: 580, y: 310, connections: ['San Francisco', 'Montreal', 'Atlanta', 'Mexico DF', 'Los Angeles'] },
    { name: 'Atlanta', group: 0, x: 580, y: 330, connections: ['Chicago', 'Miami', 'Washington'] },
    { name: 'Montreal', group: 0, x: 630, y: 270, connections: ['Chicago', 'Nueva York', 'Washington'] },
    { name: 'Nueva York', group: 0, x: 640, y: 290, connections: ['Montreal', 'Washington', 'Londres', 'Madrid'] },
    { name: 'Washington', group: 0, x: 630, y: 340, connections: ['Montreal', 'Nueva York', 'Atlanta', 'Miami'] },
    { name: 'Londres', group: 0, x: 900, y: 250, connections: ['Nueva York', 'Madrid', 'Paris', 'Essen'] },
    { name: 'Madrid', group: 0, x: 900, y: 330, connections: ['Nueva York', 'Londres', 'Paris', 'Sao Paulo', 'Argel'] },
    { name: 'Paris', group: 0, x: 930, y: 290, connections: ['Madrid', 'Londres', 'Essen', 'Argel', 'Milan'] },
    { name: 'Essen', group: 0, x: 960, y: 250, connections: ['Londres', 'Paris', 'San Petersburgo', 'Milan'] },
    { name: 'Milan', group: 0, x: 970, y: 310, connections: ['Essen', 'Paris', 'Estambul'] },
    { name: 'San Petersburgo', group: 0, x: 1030, y: 200, connections: ['Essen', 'Estambul', 'Moscu'] },
    { name: 'Los Angeles',group: 3, x: 440,y: 320, connections: ['San Francisco','Mexico DF','Chicago','Sidney']},
    { name: 'Miami', group: 3, x: 590, y: 370, connections: ['Washington','Atlanta','Mexico DF','Bogota']},
    { name: 'Mexico DF', group: 3, x: 510,y: 400, connections: ['Los Angeles','Miami','Chicago','Bogota','Lima']},
    { name: 'Bogota', group: 3, x: 600, y: 480, connections: ['Miami','Mexico DF','Lima','Sao Paulo','Buenos Aires']},
    { name: 'Lima', group: 3, x: 590, y: 550, connections: ['Mexico DF','Bogota','Santiago de Chile']},
    { name: 'Santiago de Chile', group: 3, x: 630, y: 640, connections: ['Lima']},
    { name: 'Buenos Aires', group: 3, x: 680, y: 670, connections: ['Sao Paulo','Bogota']},
    { name: 'Sao Paulo', group: 3, x: 750, y: 560, connections: ['Bogota','Buenos Aires','Lagos','Madrid']},
    { name: 'Lagos', group: 3, x: 950, y: 460, connections: ['Sao Paulo','Kinsasa','Jartum']},
    { name: 'Kinsasa', group: 3, x: 970, y: 520, connections: ['Lagos','Jartum','Johannesburgo']},
    { name: 'Jartum', group: 3, x: 1070, y: 420, connections: ['Lagos','Kinsasa','Johannesburgo']},
    { name: 'Johannesburgo', group: 3, x: 1040, y: 620, connections: ['Kinsasa','Jartum']},
    { name: 'Argel', group: 2, x: 940, y: 340, connections: ['Madrid', 'Paris', 'Estambul', 'El Cairo'] },
    { name: 'El Cairo', group: 2, x: 1040, y: 370, connections: ['Argel', 'Estambul', 'Bagdad'] },
    { name: 'Riad', group: 2, x: 1100, y: 385, connections: ['El Cairo','Bagdad','Karachi']},
    { name: 'Estambul', group: 2, x: 1020, y: 310, connections: [ 'Argel', 'El Cairo', 'Bagdad','Moscu'] },
    { name: 'Bagdad', group: 2, x: 1100, y: 360, connections: ['Estambul','Karachi','Riad','El Cairo'] },
    { name: 'Moscu', group: 2, x: 1100, y: 230, connections: ['Teheran','Estambul','San Petersburgo'] },
    { name: 'Teheran', group: 2, x: 1130, y: 340, connections: ['Moscu', 'Bagdad', 'Karachi', 'Nueva Delhi'] },
    { name: 'Karachi', group: 2, x: 1210, y: 380, connections: ['Teheran','Bagdad','Nueva Delhi','Riad','Bombay'] },
    { name: 'Bombay', group: 2, x: 1240, y: 410, connections: ['Karachi', 'Nueva Delhi', 'Madras'] },
    { name: 'Nueva Delhi', group: 2, x: 1240, y: 350, connections: ['Teheran','Karachi','Bombay','Madras','Calcuta'] },
    { name: 'Calcuta', group: 2, x: 1270, y: 400, connections: ['Nueva Delhi','Hong Kong','Madras','Bangkok'] },
    { name: 'Madras', group: 2, x: 1260, y: 450, connections: ['Bombay','Nueva Delhi','Calcula','Bangkok','Yakarta'] },
    { name: 'Yakarta', group: 1, x: 1360, y: 510, connections: ['Madras', 'Bangkok', 'Ho Chi Minh', 'Sidney'] },
    { name: 'Bangkok', group: 1, x: 1340, y: 430, connections: ['Yakarta','Calcuta','Madras','Ho Chi Minh','Hong Kong'] },
    { name: 'Hong Kong', group: 1, x: 1390, y: 380, connections: ['Bangkok','Ho Chi Minh','Taipei','Manila','Shanghai'] },
    { name: 'Shanghai', group: 1, x: 1390, y: 330, connections: ['Pekin', 'Seul', 'Hong Kong', 'Taipei', 'Tokio'] },
    { name: 'Pekin', group: 1, x: 1380, y: 275, connections: ['Shanghai', 'Seul'] },
    { name: 'Seul', group: 1, x: 1430, y: 320, connections: ['Pekin', 'Tokio'] },
    { name: 'Tokio', group: 1, x: 1470, y: 300, connections: ['San Francisco','Seul','Osaka','Shanghai'] },
    { name: 'Osaka', group: 1, x: 1460, y: 320, connections: ['Tokio', 'Taipei'] },
    { name: 'Taipei', group: 1, x: 1420, y: 370, connections: ['Osaka', 'Hong Kong', 'Shanghai','Manila'] },
    { name: 'Ho Chi Minh', group: 1, x: 1370, y: 440, connections: ['Bangkok', 'Hong Kong', 'Manila', 'Yakarta'] },
    { name: 'Manila', group: 1, x: 1440, y: 430, connections: ['San Francisco','Ho Chi Minh','Taipei','Hong Kong','Sidney'] },
    { name: 'Sidney', group: 1, x: 1520, y: 690, connections: ['Los Angeles', 'Manila', 'Yakarta'] }
  ];

  coordenadas: { [key: string]: { top: number; left: number } } = {};

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