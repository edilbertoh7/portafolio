import { Component } from '@angular/core';
import { InfopaginaService } from './services/infopagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**se crea un contructor para hace rel llamado a 
   * infopagina service que es el servicio que se creo para 
   * la informacion de la pagina
   * 
   */
  /**el constructor hace lo que se conoce como injection de una 
   * dependencia ya que los servicio se pueden injectar*/
  constructor( public infopaginaservice: InfopaginaService){

  }
}
