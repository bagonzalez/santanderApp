import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { URLSearchParams, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class TablaResultadosService {

  constructor(private http: Http) { }

  // Obtener resultados liga
  getResultTable(anio) {

     let params: URLSearchParams = new URLSearchParams();
     params.set('anio', anio);         

    return this.http.get('/api/tablaResultados/'+anio, {
      search: params
    })
      .map(res => res.json());
  }


  getPrimeroTabla(){

      return this.http.get('/api/getPrimeroTabla')
      .map(res => res.json());

  }

   getUltimoTabla(){

      return this.http.get('/api/getUltimoTabla')
      .map(res => res.json());

  }

  

}
