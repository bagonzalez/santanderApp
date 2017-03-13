import { Component, OnInit, Directive, ElementRef} from '@angular/core';
import { TablaResultadosService } from '../tabla-resultados.service'



@Component({
  selector: 'app-tabla-resultados',
  templateUrl: './tabla-resultados.component.html',
  styleUrls: ['./tabla-resultados.component.css']
})
export class TablaResultadosComponent implements OnInit {

  tablaResultados: any = [];
  primerEquipo: any = [];
  ultimoEquipo: any = [];
  public notifica = false;
  public anio:string = "2017";
  public anios: string[] = ["2017", "2016", "2015"];
  public submitted = false;


  constructor(private tablaResultadosService : TablaResultadosService) { }

  ngOnInit() {
    this.tablaResultadosService.getResultTable(this.anio).subscribe(resultados=> {
      this.tablaResultados=resultados;
    })

    this.tablaResultadosService.getPrimeroTabla().subscribe(resultados=> {
      this.primerEquipo=resultados;           
    })

      this.tablaResultadosService.getUltimoTabla().subscribe(resultados=> {
      this.ultimoEquipo=resultados;           
    })
  }

  getTableResult() {
    this.tablaResultadosService.getResultTable(this.anio).subscribe(resultados=> {
      this.tablaResultados=resultados;
    })
  }

}
