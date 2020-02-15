import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

info: InfoPagina ={};
cargado = false;

equipo: any[] = [];

  constructor( private http: HttpClient) {
this.cargarinfo();
this.cargarEquipo();
   }
   private cargarinfo() {
/*PERMITE LEER UN ACHIVO JSON Y TOMAR SUS PROPIEDADES PARA UTILIZARLOS EN LAS PAGINAS
  	PARA ESTO SE NECESITA UN MODULO QUE PERMITA REALIZAR PETICIONES HTTP EN ESTE CASO LO IMPORTAMOS EN
	  EL app.module.ts*/
      this.http.get('assets/data/data-pagina.json')
	  .subscribe((resp: InfoPagina) => { /*suscribe recibe una respuesta */
	  	 this.cargado = true;
	  	this.info = resp;
	  });

   }
   private cargarEquipo(){
      this.http.get('https://portafolio-angular-e5d34.firebaseio.com/equipo.json')
      .subscribe((resp: any[]) => { /*suscribe recibe una respuesta */
         this.equipo = resp;
      });

   }

}
