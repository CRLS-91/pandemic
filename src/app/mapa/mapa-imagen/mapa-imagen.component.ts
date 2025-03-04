import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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

  ciudades: { name: string; group: number; x: number; y: number; connections: string[], infectionLevels: {verde: number; azul: number; rojo: number;} }[] = [
    { name: 'San Francisco', group: 0, x: 420, y: 620, connections: ['Chicago', 'Los Angeles', 'Manila', 'Tokio'], infectionLevels: { verde: 0, azul: 0, rojo: 0 }},
    { name: 'Chicago', group: 0, x: 590, y: 630, connections: ['San Francisco', 'Montreal', 'Atlanta', 'Mexico DF', 'Los Angeles'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Atlanta', group: 0, x: 590, y: 710, connections: ['Chicago', 'Miami', 'Washington'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Montreal', group: 0, x: 660, y: 590, connections: ['Chicago', 'Nueva York', 'Washington'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Nueva York', group: 0, x: 650, y: 650, connections: ['Montreal', 'Washington', 'Londres', 'Madrid'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Washington', group: 0, x: 620, y: 660, connections: ['Montreal', 'Nueva York', 'Atlanta', 'Miami'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Londres', group: 0, x: 960, y: 560, connections: ['Nueva York', 'Madrid', 'Paris', 'Essen'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Madrid', group: 0, x: 950, y: 700, connections: ['Nueva York', 'Londres', 'Paris', 'Sao Paulo', 'Argel'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Paris', group: 0, x: 975, y: 600, connections: ['Madrid', 'Londres', 'Essen', 'Argel', 'Milan'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Essen', group: 0, x: 1000, y: 560, connections: ['Londres', 'Paris', 'San Petersburgo', 'Milan'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Milan', group: 0, x: 1005, y: 630, connections: ['Essen', 'Paris', 'Estambul'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'San Petersburgo', group: 0, x: 1090, y: 470, connections: ['Essen', 'Estambul', 'Moscu'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Los Angeles', group: 3, x: 440, y: 700, connections: ['San Francisco', 'Mexico DF', 'Chicago', 'Sidney'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Miami', group: 3, x: 595, y: 810, connections: ['Washington', 'Atlanta', 'Mexico DF', 'Bogota'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Mexico DF', group: 3, x: 500, y: 860, connections: ['Los Angeles', 'Miami', 'Chicago', 'Bogota', 'Lima'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Bogota', group: 3, x: 610, y: 1040, connections: ['Miami', 'Mexico DF', 'Lima', 'Sao Paulo', 'Buenos Aires'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Lima', group: 3, x: 600, y: 1230, connections: ['Mexico DF', 'Bogota', 'Santiago de Chile'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Santiago de Chile', group: 3, x: 640, y: 1430, connections: ['Lima'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Buenos Aires', group: 3, x: 700, y: 1430, connections: ['Sao Paulo', 'Bogota'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Sao Paulo', group: 3, x: 730, y: 1350, connections: ['Bogota', 'Buenos Aires', 'Lagos', 'Madrid'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Lagos', group: 3, x: 990, y: 1010, connections: ['Sao Paulo', 'Kinsasa', 'Jartum'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Kinsasa', group: 3, x: 1030, y: 1110, connections: ['Lagos', 'Jartum', 'Johannesburgo'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Jartum', group: 3, x: 1110, y: 950, connections: ['Lagos', 'Kinsasa', 'Johannesburgo'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Johannesburgo', group: 3, x: 1095, y: 1330, connections: ['Kinsasa', 'Jartum'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Argel', group: 2, x: 980, y: 750, connections: ['Madrid', 'Paris', 'Estambul', 'El Cairo'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'El Cairo', group: 2, x: 1100, y: 810, connections: ['Argel', 'Estambul', 'Bagdad'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Riad', group: 2, x: 1180, y: 850, connections: ['El Cairo', 'Bagdad', 'Karachi'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Estambul', group: 2, x: 1080, y: 680, connections: ['Argel', 'El Cairo', 'Bagdad', 'Moscu'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Bagdad', group: 2, x: 1160, y: 750, connections: ['Estambul', 'Karachi', 'Riad', 'El Cairo'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Moscu', group: 2, x: 1130, y: 500, connections: ['Teheran', 'Estambul', 'San Petersburgo'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Teheran', group: 2, x: 1190, y: 730, connections: ['Moscu', 'Bagdad', 'Karachi', 'Nueva Delhi'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Karachi', group: 2, x: 1270, y: 800, connections: ['Teheran', 'Bagdad', 'Nueva Delhi', 'Riad', 'Bombay'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Bombay', group: 2, x: 1310, y: 890, connections: ['Karachi', 'Nueva Delhi', 'Madras'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Nueva Delhi', group: 2, x: 1315, y: 790, connections: ['Teheran', 'Karachi', 'Bombay', 'Madras', 'Calcuta'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Calcuta', group: 2, x: 1360, y: 850, connections: ['Nueva Delhi', 'Hong Kong', 'Madras', 'Bangkok'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Madras', group: 2, x: 1335, y: 970, connections: ['Bombay', 'Nueva Delhi', 'Calcuta', 'Bangkok', 'Yakarta'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Yakarta', group: 1, x: 1475, y: 1160, connections: ['Madras', 'Bangkok', 'Ho Chi Minh', 'Sidney'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Bangkok', group: 1, x: 1440, y: 930, connections: ['Yakarta', 'Calcuta', 'Madras', 'Ho Chi Minh', 'Hong Kong'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Hong Kong', group: 1, x: 1500, y: 820, connections: ['Bangkok', 'Ho Chi Minh', 'Taipei', 'Manila', 'Shanghai'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Shanghai', group: 1, x: 1510, y: 740, connections: ['Pekin', 'Seul', 'Hong Kong', 'Taipei', 'Tokio'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Pekin', group: 1, x: 1480, y: 630, connections: ['Shanghai', 'Seul'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Seul', group: 1, x: 1530, y: 660, connections: ['Pekin', 'Tokio'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Tokio', group: 1, x: 1590, y: 660, connections: ['San Francisco', 'Seul', 'Osaka', 'Shanghai'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Osaka', group: 1, x: 1560, y: 680, connections: ['Tokio', 'Taipei'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Taipei', group: 1, x: 1525, y: 820, connections: ['Osaka', 'Hong Kong', 'Shanghai', 'Manila'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Ho Chi Minh', group: 1, x: 1470, y: 960, connections: ['Bangkok', 'Hong Kong', 'Manila', 'Yakarta'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Manila', group: 1, x: 1535, y: 910, connections: ['San Francisco', 'Ho Chi Minh', 'Taipei', 'Hong Kong', 'Sidney'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
    { name: 'Sidney', group: 1, x: 1640, y: 1500, connections: ['Los Angeles', 'Manila', 'Yakarta'], infectionLevels: { verde: 0, azul: 0, rojo: 0 } },
  ];

  coordenadas: { [key: string]: { top: number; left: number } | undefined} = {};
  ciudadesSeleccionadas: string[] = [];
  mostrarBoton: boolean = true;
  rondaActual: number = 1;
  ciudadesInfectadas: string[] = [];
  infeccionesPropagadas: string[] = [];
  turnosParaVacuna: number = 0;
  juegoTerminado: boolean = false;
  movimientosRestantes: number = 4;
  ciudadSeleccionada: any | null;
  historialRondas: string[] = [];
  brotesPorNivel: { verde: { 1: number, 2: number, 3: number, }; azul: { 1: number, 2: number, 3: number }; rojo: { 1: number, 2: number, 3: number } } = {
    verde: { 1: 0, 2: 0, 3: 0 },
    azul: { 1: 0, 2: 0, 3: 0 },
    rojo: { 1: 0, 2: 0, 3: 0 }
  };
  
  ngAfterViewInit() {
    this.updateCoordinates();
    this.iniciarInfecciones();
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
    this.ciudades.forEach(ciudad => {
      this.coordenadas[ciudad.name] = {
        top: (ciudad.y / 2000) * mapHeight,
        left: (ciudad.x / 2000) * mapWidth
      };
    });
    this.cdr.detectChanges();
  }

  private iniciarInfecciones() {
    const ciudadesAleatorias = [...this.ciudades].sort(() => 0.5 - Math.random()).slice(0, 9);
    ciudadesAleatorias.forEach((ciudad, index) => {
      if (index < 3) {
        ciudad.infectionLevels.verde = 3;
      } else if (index < 6) {
        ciudad.infectionLevels.azul = 3;
      } else {
        ciudad.infectionLevels.rojo = 3;
      }
      this.actualizarBrotes();
    });
    this.cdr.detectChanges();
  }
  seleccionarCiudad(nombreCiudad: string) {
    this.ciudadSeleccionada = this.ciudades.find(c => c.name === nombreCiudad);
  }

  sumaVerde: number = 0;
  sumaAzul: number = 0;
  sumaRojo: number = 0;

  // ... otros métodos

  actualizarBrotes() {
   

    // Reinicializar brotesPorNivel
    this.brotesPorNivel = { verde: { 1: 0, 2: 0, 3: 0 }, azul: { 1: 0, 2: 0, 3: 0 }, rojo: { 1: 0, 2: 0, 3: 0 } };

    // Recalcular brotes
    this.ciudades.forEach(ciudad => {
        Object.keys(ciudad.infectionLevels).forEach(tipo => {
            const nivel = ciudad.infectionLevels[tipo as keyof typeof ciudad.infectionLevels];
            if (nivel >= 1 && nivel <= 3) {
                this.brotesPorNivel[tipo as keyof typeof this.brotesPorNivel][nivel as keyof typeof this.brotesPorNivel.verde]++;
            }
        });
    });

    // Calcular nuevas sumas después de recalcular brotes
    this.sumaVerde = this.brotesPorNivel.verde[1] + this.brotesPorNivel.verde[2] + this.brotesPorNivel.verde[3];
    this.sumaAzul = this.brotesPorNivel.azul[1] + this.brotesPorNivel.azul[2] + this.brotesPorNivel.azul[3];
    this.sumaRojo = this.brotesPorNivel.rojo[1] + this.brotesPorNivel.rojo[2] + this.brotesPorNivel.rojo[3];

    // Detectar cambios en la vista
    this.cdr.detectChanges();
  }


  curarCiudad(nombreCiudad: string, tipo: 'verde' | 'azul' | 'rojo') {
    if (this.movimientosRestantes <= 0) {
        alert("No te quedan movimientos, pasa de ronda.");
        return;
    }

    const ciudad = this.ciudades.find(c => c.name === nombreCiudad);
    if (!ciudad) return;

    if (this.progresoVacuna[tipo] < 100) {
        // Si la vacuna no está al 100%, solo resta 1 carga y consume 1 movimiento
        if (ciudad.infectionLevels[tipo] > 0) {
            ciudad.infectionLevels[tipo]--;
            this.movimientosRestantes--;
        }
    } else {
        // Si la vacuna está al 100%, elimina todas las cargas de ese color y consume 2 movimientos
        if (ciudad.infectionLevels[tipo] > 0) {
            ciudad.infectionLevels[tipo] = 0;
            this.movimientosRestantes -= 2;
        }
    }

    this.actualizarBrotes();
    this.cdr.detectChanges();
}



  vacunaDesarrollada = {
    verde: false,
    azul: false,
    rojo: false
  };

  progresoVacuna = {
    verde: 0,
    azul: 0,
    rojo: 0
  };

  investigarVacuna(color: 'verde' | 'azul' | 'rojo') {
    if (this.movimientosRestantes < 4) {
        alert("Necesitas 4 movimientos para investigar la vacuna.");
        return;
    }

    if (this.progresoVacuna[color] < 100) {
        this.progresoVacuna[color] += 33;
        this.vacunaDesarrollada[color] = true;
        this.movimientosRestantes -= 4; // Se consumen los 4 movimientos
        if (this.progresoVacuna[color] >= 100) {
            this.progresoVacuna[color] = 100;
        }
    }

    this.cdr.detectChanges();
}


  pasarRonda() {
    this.movimientosRestantes = 4; // Reiniciar movimientos al iniciar una nueva ronda
    this.rondaActual++;
    this.ciudadesInfectadas = [];
    this.infeccionesPropagadas = [];

    // Seleccionar 4 ciudades al azar para infectar
    const ciudadesAleatorias = [...this.ciudades].sort(() => 0.5 - Math.random()).slice(0, 6);

    ciudadesAleatorias.forEach(ciudad => {
        this.aplicarInfeccion(ciudad);
        this.ciudadesInfectadas.push(ciudad.name);
    });

    this.actualizarBrotes();
    this.actualizarPanelRondas();
    this.cdr.detectChanges();
}



  actualizarPanelRondas() {
    this.historialRondas.push(
      `RONDA ${this.rondaActual}: Se infectaron ${this.ciudadesInfectadas.length} ciudades.`
    );
    this.infeccionesPropagadas.push(
      `Se propago la infeccion a  ${this.infeccionesPropagadas.length} ciudades.`
    );
    this.cdr.detectChanges();
  }

  private aplicarInfeccion(ciudad: any) {
    if (ciudad.infectionLevels.verde < 3) {
        ciudad.infectionLevels.verde++;
    } else if (ciudad.infectionLevels.azul < 3) {
        ciudad.infectionLevels.azul++;
    } else if (ciudad.infectionLevels.rojo < 3) {
        ciudad.infectionLevels.rojo++;
    } else {
        // Si ya tiene Rojo3, propagar la infección a ciudades conectadas
        this.propagarInfeccion(ciudad);
    }
}

private propagarInfeccion(ciudad: any) {
  let ciudadesPendientes = [...ciudad.connections]; // Ciudades colindantes a propagar
  let ciudadesYaPropagadas = new Set(); // Para evitar propagaciones infinitas

  while (ciudadesPendientes.length > 0) {
      const nombreCiudad = ciudadesPendientes.shift(); // Tomar la siguiente ciudad a procesar
      const ciudadConectada = this.ciudades.find(c => c.name === nombreCiudad);

      if (!ciudadConectada || ciudadesYaPropagadas.has(nombreCiudad)) {
          continue; // Si la ciudad no existe o ya fue procesada, seguir con la siguiente
      }

      ciudadesYaPropagadas.add(nombreCiudad); // Marcar la ciudad como procesada

      if (ciudadConectada.infectionLevels.verde < 3) {
          ciudadConectada.infectionLevels.verde++;
          this.infeccionesPropagadas.push(ciudadConectada.name);
      } else if (ciudadConectada.infectionLevels.azul < 3) {
          ciudadConectada.infectionLevels.azul++;
          this.infeccionesPropagadas.push(ciudadConectada.name);
      } else if (ciudadConectada.infectionLevels.rojo < 3) {
          ciudadConectada.infectionLevels.rojo++;
          this.infeccionesPropagadas.push(ciudadConectada.name);
      } else {
          // Si la ciudad ya tiene Rojo3, agregar sus conexiones a la lista para continuar la propagación
          ciudadesPendientes.push(...ciudadConectada.connections);
      }
  }

  this.actualizarBrotes();
  this.cdr.detectChanges();
  this.verificarDerrota();
}



  private verificarDerrota() {
    const totalBrotes = Object.values(this.brotesPorNivel).reduce((total, niveles) => {
      return total + Object.values(niveles).reduce((subtotal, valor) => subtotal + valor, 0);
    }, 0);
    if (totalBrotes >= 30) {
      if (!this.juegoTerminado) {
        alert('¡Has perdido la partida! Se ha desatado una pandemia.');
        this.juegoTerminado = true;
      }
    }
  }



  // Método para mostrar la información en la interfaz
  mostrarInformacionCiudad(ciudad: any) {
    this.ciudadSeleccionada = ciudad;
  }

}



