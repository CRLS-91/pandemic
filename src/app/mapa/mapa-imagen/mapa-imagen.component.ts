import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule aquí


@Component({
  selector: 'app-mapa-imagen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mapa-imagen.component.html',
  styleUrl: './mapa-imagen.component.css'
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
    {name: 'San Francisco', group: 0, x: 600, y: 315, connections: ['Chicago', 'Los Angeles', 'Manila', 'Tokio'] },
    {name: 'Chicago', group: 0, x: 300, y: 280, connections: ['San Francisco', 'Montreal', 'Atlanta', 'Mexico DF', 'Los Angeles'] },
    {name: 'Atlanta', group: 0, x: 320, y: 320, connections: ['Chicago', 'Miami', 'Washington'] },
    {name: 'Montreal', group: 0, x: 350, y: 280, connections: ['Chicago', 'Nueva York', 'Washington'] },
    {name: 'Nueva York', group: 0, x: 380, y: 290, connections: ['Montreal', 'Washington', 'Londres', 'Madrid'] },
    {name: 'Washington', group: 0, x: 360, y: 330, connections: ['Montreal','Nueva York','Atlanta','Miami']},
    {name: 'Londres',group: 0, x: 700, y: 230, connections: ['Nueva York','Madrid','Paris','Essen']},
    {name: 'Madrid', group: 0, x: 910, y: 325, connections: ['Nueva York','Londres','Paris','Sao Paulo','Argel']},
    {name: 'Paris',group: 0 , x: 727 , y: 250 , connections: ['Madrid','Londres','Essen','Argel','Milan']},
    {name: 'Essen',group: 0 , x: 755 , y: 190 , connections: ['Londres','Paris','San Petersburgo','Milan']},
    {name: 'Milan',group: 0 , x: 755 , y: 235 , connections: ['Essen','Paris','Estambul']},
    {name: 'Bogota',group: 3 , x: 400 , y: 460 , connections: ['Miami','Mexico DF','Lima', 'Sao Paulo', 'Buenos Aires']},
    {name: 'Lima',group: 3 , x: 395 , y: 520 , connections: ['Mexico DF','Bogota','Santiago de Chile']},
    {name: 'Miami',group: 3 , x: 380 , y: 360 , connections: ['Washington','Atlanta','Mexico DF','Bogota']},
    {name: 'Santiago de Chile',group: 3 , x: 430 , y: 620 , connections: ['Lima']},
    {name: 'Buenos Aires', group: 0, x: 453, y: 670, connections: ['Sao Paulo', 'Bogota'] },
    {name: 'Sao Paulo', group: 0, x: 520, y: 570, connections: ['Bogota', 'Buenos Aires', 'Lagos', 'Madrid'] },
    {name: 'Kinsasa', group: 3, x: 770, y: 540, connections: ['Lagos', 'Jartum', 'Johannesburgo'] },
    {name: 'Lagos', group: 3, x: 710, y: 450, connections: ['Sao Paulo', 'Kinshasa', 'Jartum']},
    {name: 'Jartum', group: 3, x: 815, y: 815, connections: ['El Cairo', 'Lagos', 'Kinsasa', 'Johannesburgo']},
    {name: 'Johannesburgo', group: 3, x: 815, y: 630, connections: ['Kinshasa', 'Jartum']},
    {name: 'Argel', group: 2, x: 730, y: 330, connections: ['Madrid', 'Paris', 'El Cairo', 'Estambul']},
    {name: 'El Cairo', group: 2, x: 820, y: 350, connections: ['Argel', 'Bagdad', 'Estambul']},
    {name: 'Riad', group: 2, x: 895, y: 385, connections: ['Argel', 'Bagdad', 'Karachi', 'Moscu', 'El Cairo']},
    {name: 'Estambul', group: 2, x: 830, y: 294, connections: ['Argel', 'Bagdad', 'El Cairo']},
    {name: 'Bagdad', group: 2, x: 880, y: 320, connections: ['Estambul', 'Karachi', 'El Cairo', 'Riad']},
    {name: 'Moscu', group: 2, x: 880, y: 320, connections: ['Estambul', 'Teheran', 'San Petersburgo']},
    {name: 'Teheran', group: 2, x: 880, y: 320, connections: ['Moscu', 'Bagdad', 'Karachi', 'Nueva Delhi']},
    {name: 'Karachi', group: 2, x: 880, y: 320, connections: ['Teheran', 'Bagdad', 'Riad', 'Nueva Delhi', 'Bombay']},
    {name: 'Bombay', group: 2, x: 880, y: 320, connections: ['Madras', 'Karachi', 'Nueva Delhi']},
    {name: 'Nueva Delhi', group: 2, x: 880, y: 320, connections: ['Madras', 'Karachi', 'Teheran', 'Bombay','Calcuta']},
    {name: 'Calcuta', group: 2, x: 880, y: 320, connections: ['Nueva Delhi', 'Madras', 'Bangkok', 'Hong Kong']},
    {name: 'Madras', group: 2, x: 880, y: 320, connections: ['Nueva Delhi', 'Bombay', 'Bangkok', ' Yakarta']},
    {name: 'Bombay', group: 2, x: 880, y: 320, connections: ['Nueva Delhi', 'Karachi', 'Madras']},
    {name: 'Yakarta', group: 2, x: 880, y: 320, connections: ['Madras', 'Bangkok', 'Ho Chi Minh', 'Sidney']},
    {name: 'Bangkok', group: 2, x: 880, y: 320, connections: ['Madras', 'Calcuta', 'Hong Kong', 'Ho Chi Minh', 'Yakarta']},
    {name: 'Hong Kong', group: 2, x: 880, y: 320, connections: ['Ho Chi Minh', 'Bangkok', 'Shanghai', 'Manila', 'Taipei']},
    {name: 'Shanghai', group: 2, x: 880, y: 320, connections: ['Pekin', 'Seul', 'Hong Kong', 'Tokio','Taipei']},
    {name: 'Pekin', group: 2, x: 880, y: 320, connections: ['Seul', 'Shanghai', 'Tokio']},
    {name: 'Seul', group: 2, x: 880, y: 320, connections: ['Pekin', 'Tokio']},
    {name: 'Tokio', group: 2, x: 880, y: 320, connections: ['Osaka', 'San Francisco', 'Seul', 'Shanghai']},
    {name: 'Osaka', group: 2, x: 880, y: 320, connections: ['Tokio', 'Taipei']},
    {name: 'Taipei', group: 2, x: 880, y: 320, connections: ['Osaka', 'Hong Kong', 'Shanghai', 'Manila']},
    {name: 'Ho Chi Minh', group: 2, x: 880, y: 320, connections: ['Yakarta', 'Bangkok', 'Hong Kong', 'Manila']},
    {name: 'Manila', group: 2, x: 880, y: 320, connections: ['San Francisco', 'Hong Ho Chi Minh', 'Taipei', 'Hong Kong', 'Sidney']},
    {name: 'Sidney', group: 2, x: 880, y: 320, connections: ['Los Angeles', 'Yakarta', 'Manila']}, 
    
    // ... (agrega las demás ciudades aquí siguiendo el mismo formato)
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

