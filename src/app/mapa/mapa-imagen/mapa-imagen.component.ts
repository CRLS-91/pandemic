import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule aquí
import { HostListener } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-mapa-imagen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mapa-imagen.component.html',
  styleUrls: ['./mapa-imagen.component.css']

})

  export class MapaImagenComponent implements OnInit, AfterViewInit {
    @ViewChild('mapContainer') mapContainer!: ElementRef; // Referencia al contenedor del mapa
  
      // Dimensiones originales del mapa
  originalWidth = 800;
  originalHeight = 525;

  // Dimensiones actuales del contenedor
  containerWidth: number = 800;
  containerHeight: number = 525;
  constructor(private cdr: ChangeDetectorRef) {}

  cities: { name: string; group: number; x: number; y: number; connections: string[] }[] = [
    { name: 'San Francisco', group: 0, x: 88.93, y: 58.65, connections: ['Chicago', 'Los Angeles', 'Manila', 'Tokio'] },
    { name: 'Chicago', group: 0, x: 117.23, y: 62.69, connections: ['San Francisco', 'Montreal', 'Atlanta', 'Mexico DF', 'Los Angeles'] },
    { name: 'Atlanta', group: 0, x: 117.23, y: 66.74, connections: ['Chicago', 'Miami', 'Washington'] },
    { name: 'Montreal', group: 0, x: 127.34, y: 54.60, connections: ['Chicago', 'Nueva York', 'Washington'] },
    { name: 'Nueva York', group: 0, x: 129.36, y: 58.65, connections: ['Montreal', 'Washington', 'Londres', 'Madrid'] },
    { name: 'Washington', group: 0, x: 127.34, y: 68.76, connections: ['Montreal', 'Nueva York', 'Atlanta', 'Miami'] },
    { name: 'Londres', group: 0, x: 181.91, y: 50.56, connections: ['Nueva York', 'Madrid', 'Paris', 'Essen'] },
    { name: 'Madrid', group: 0, x: 181.91, y: 66.74, connections: ['Nueva York', 'Londres', 'Paris', 'Sao Paulo', 'Argel'] },
    { name: 'Paris', group: 0, x: 187.97, y: 58.65, connections: ['Madrid', 'Londres', 'Essen', 'Argel', 'Milan'] },
    { name: 'Essen', group: 0, x: 194.04, y: 50.56, connections: ['Londres', 'Paris', 'San Petersburgo', 'Milan'] },
    { name: 'Milan', group: 0, x: 196.06, y: 62.69, connections: ['Essen', 'Paris', 'Estambul'] },
    { name: 'San Petersburgo', group: 0, x: 208.19, y: 40.45, connections: ['Essen', 'Estambul', 'Moscu'] },
  ];
  ngOnInit() {
    console.log('Initial Cities:', this.cities); // Verifica que las ciudades estén cargadas
  }
  


  ngAfterViewInit() {
    if (this.mapContainer) {
      this.containerWidth = this.mapContainer.nativeElement.offsetWidth;
      this.containerHeight = this.mapContainer.nativeElement.offsetHeight;
      console.log('Container Dimensions:', this.containerWidth, this.containerHeight);
      this.scaleCities();
  
      // Forzar la detección de cambios
      this.cdr.detectChanges();
    } else {
      console.error('mapContainer no está definido.');
    }
  }

  
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.containerWidth = this.mapContainer.nativeElement.offsetWidth;
    this.containerHeight = this.mapContainer.nativeElement.offsetHeight;
    this.scaleCities();
  }


    
  scaleCities() {
    console.log('Original Cities:', this.cities); // Imprime el array original de ciudades
    this.cities = this.cities.map(city => ({
      ...city,
      x: (city.x / this.originalWidth) * this.containerWidth,
      y: (city.y / this.originalHeight) * this.containerHeight,
    }));
    console.log('Updated City Positions:', this.cities); // Imprime las posiciones escaladas
  }
  
  // Obtiene la posición de una ciudad
  getCityPosition(cityName: string) {
    const city = this.cities.find(c => c.name === cityName);
    return city ? { x: city.x, y: city.y } : null;
  }
    }
  
  



