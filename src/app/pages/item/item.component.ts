import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { Productodescripcion } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  producto: Productodescripcion;
  id: string;

  constructor(private route: ActivatedRoute,
              public productoservice: ProductosService ) { }

  ngOnInit() {
    this.route.params /*.subscribe estara atento todos los cambios que sucedan  */
    .subscribe(parametros => {
  /*console.log(parametros['id']);*/
  this.productoservice.getproducto(parametros['id'])
  .subscribe((producto: Productodescripcion) => {
    this.id = parametros['id'];
    this.producto = producto;
    console.log(producto);
  });
    });
  }

}
