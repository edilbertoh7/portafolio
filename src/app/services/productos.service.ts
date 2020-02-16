import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  productos: Producto[] = [];

  constructor(private http: HttpClient) {

    this.cargarProductos();
   }
  private cargarProductos() {
    this.http.get('https://portafolio-angular-e5d34.firebaseio.com/productos_idx.json')
                .subscribe((resp: Producto[]) => {
                  //console.log(resp);
                  this.productos = resp;
                  this.cargando = false;
                });
}
getproducto(id: string){
  return this.http.get(`https://portafolio-angular-e5d34.firebaseio.com/productos/${id}.json`);
}
}
