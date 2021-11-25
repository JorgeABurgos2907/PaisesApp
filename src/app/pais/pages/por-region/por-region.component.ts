import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regionActiva: string = '';
  paises : Country[] = [];

  constructor(private paisService: PaisService) { }

  activarRegion (region: string){
    this.regionActiva = region.toLowerCase();

    this.paisService.buscarRegion(this.regionActiva)
    .subscribe( (paises ) => {
      
      console.log(paises);
      this.paises = paises;

    });

  }

  getclaseCSS(region: string): string{
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary'
  }

}
