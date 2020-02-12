import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

info: InfoPagina ={};
cargado = false;
  constructor( private http: HttpClient) {
  	console.log('servicio de pagina cargada');
  	/*PERMITE LEER UN ACHIVO JSON Y TOMAR SUS PROPIEDADES PARA UTILIZARLOS EN LAS PAGINAS
  	PARA ESTO SE NECESITA UN MODULO QUE PERMITA REALIZAR PETICIONES HTTP EN ESTE CASO LO IMPORTAMOS EN 
	  EL app.module.ts*/
	  this.http.get('assets/data/data-pagina.json')
	  .subscribe((resp: InfoPagina) => { /*suscribe recibe una respuesta */
	  	this.cargado =true;
	  	this.info = resp;
		console.log(resp);
	  } );
   }
}
