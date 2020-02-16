import { Component, OnInit } from '@angular/core';
import { InfopaginaService } from 'src/app/services/infopagina.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _servicio: InfopaginaService,
    /*para poder navegar a la pagina del search luego
     que se presiona enter en la caja de busqueda */
              private router: Router) { }

  ngOnInit() {
  }

  buscarProducto(termino: string) {
    if (termino.length < 1) {
      return;/*si la caja de texto esta vacia evita que se realice la busqueda */
    }
    this.router.navigate(['/search', termino]);

  // console.log(termino);
  }
}
