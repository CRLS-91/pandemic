import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule aquí


@Component({
  selector: 'app-mapa-imagen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mapa-imagen.component.html',
  styleUrls: ['./mapa-imagen.component.css']

})




export class MapaImagenComponent implements OnInit, AfterViewInit {
  @ViewChild('mapContainer') mapContainer!: ElementRef;


  

  getCityPosition(cityName: string) {
    const city = this.cities.find(c => c.name === cityName);
    return city ? { x: city.x, y: city.y } : null;
  }
  
  // Dimensiones originales del mapa y dimensiones actuales del contenedor
  originalWidth = 3958;
  originalHeight = 2596;
  containerWidth: number = 0;
  containerHeight: number = 0;

  // Datos de las ciudades (nombre, grupo, coordenadas, y conexiones)
  cities: { name: string; group: number; x: number; y: number; connections: string[] }[] = [
    { name: 'San Francisco', group: 0, x: 440, y: 310, connections: ['Chicago', 'Los Angeles', 'Manila', 'Tokio'] },
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
    { name: 'Moscu', group: 0, x: 1100, y: 230, connections: ['San Petersburgo', 'Estambul', 'Teheran'] },
    { name: 'Estambul', group: 0, x: 1020, y: 310, connections: ['Milan', 'Moscu', 'Argel', 'El Cairo', 'Bagdad'] },
    { name: 'Argel', group: 0, x: 930, y: 350, connections: ['Madrid', 'Paris', 'Estambul', 'El Cairo'] },
    { name: 'El Cairo', group: 0, x: 1050, y: 370, connections: ['Argel', 'Estambul', 'Bagdad', 'Jartum'] },
    { name: 'Bagdad', group: 0, x: 1100, y: 360, connections: ['Estambul', 'El Cairo', 'Teheran', 'Riad'] },
    { name: 'Teheran', group: 0, x: 1130, y: 340, connections: ['Moscu', 'Bagdad', 'Karachi', 'Nueva Delhi'] },
    { name: 'Karachi', group: 0, x: 1210, y: 380, connections: ['Teheran', 'Riad', 'Bombay', 'Nueva Delhi'] },
    { name: 'Bombay', group: 0, x: 1240, y: 410, connections: ['Karachi', 'Nueva Delhi', 'Madras'] },
    { name: 'Nueva Delhi', group: 0, x: 1240, y: 350, connections: ['Teheran', 'Karachi', 'Calcuta', 'Bombay'] },
    { name: 'Calcuta', group: 0, x: 1270, y: 410, connections: ['Nueva Delhi', 'Bangkok', 'Hong Kong'] },
    { name: 'Madras', group: 0, x: 1260, y: 450, connections: ['Bombay', 'Bangkok', 'Yakarta'] },
    { name: 'Bangkok', group: 0, x: 1340, y: 430, connections: ['Calcuta', 'Hong Kong', 'Ho Chi Minh', 'Yakarta'] },
    { name: 'Hong Kong', group: 0, x: 1390, y: 380, connections: ['Shanghai', 'Bangkok', 'Manila', 'Ho Chi Minh', 'Taipei'] },
    { name: 'Shanghai', group: 0, x: 1390, y: 330, connections: ['Pekin', 'Seul', 'Hong Kong', 'Taipei'] },
    { name: 'Pekin', group: 0, x: 1520, y: 220, connections: ['Shanghai', 'Seul'] },
    { name: 'Seul', group: 0, x: 1560, y: 240, connections: ['Pekin', 'Tokio'] },
    { name: 'Tokio', group: 0, x: 1600, y: 270, connections: ['Seul', 'Osaka', 'San Francisco'] },
    { name: 'Osaka', group: 0, x: 1640, y: 320, connections: ['Tokio', 'Taipei'] },
    { name: 'Taipei', group: 0, x: 1570, y: 330, connections: ['Osaka', 'Hong Kong', 'Shanghai'] },
    { name: 'Ho Chi Minh', group: 0, x: 1450, y: 400, connections: ['Bangkok', 'Hong Kong', 'Manila', 'Yakarta'] },
    { name: 'Manila', group: 0, x: 1500, y: 430, connections: ['San Francisco', 'Hong Kong', 'Ho Chi Minh', 'Sidney'] },
    { name: 'Yakarta', group: 0, x: 1430, y: 480, connections: ['Madras', 'Bangkok', 'Ho Chi Minh', 'Sidney'] },
    { name: 'Sidney', group: 0, x: 1500, y: 550, connections: ['Los Angeles', 'Manila', 'Yakarta'] }
    


  ];
  
  

  ngOnInit() {}

  ngAfterViewInit() {
    // Obtenemos el tamaño actual del contenedor
    this.containerWidth = this.mapContainer.nativeElement.offsetWidth;
    this.containerHeight = this.mapContainer.nativeElement.offsetHeight;
    this.scaleCities();
  }

  // Escalamos las coordenadas de cada ciudad según el tamaño del contenedor
  scaleCities() {
    this.cities = this.cities.map(city => ({
      ...city,
      x: (city.x / this.originalWidth) * this.containerWidth,
      y: (city.y / this.originalHeight) * this.containerHeight
    }));
  }
}

