import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/productos.interface';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor(private http: HttpClient) {

    this.cargarProductos();
  }
  private cargarProductos() {
    /*se usa una  promesas para que se ejecute el codigo hasta que los productos esten cargados */

    return new Promise( ( resolve, reject ) =>{
      this.http.get('https://portafolio-angular-e5d34.firebaseio.com/productos_idx.json')
      .subscribe((resp: Producto[]) => {
        /*console.log(resp);*/
        this.productos = resp;
        this.cargando = false;
        resolve();
      });

    });
  }
  getproducto(id: string) {
    return this.http.get(`https://portafolio-angular-e5d34.firebaseio.com/productos/${id}.json`);
  }
  buscarProducto( termino: string){
    if (this.productos.length === 0) {
      // cargar productos
      this.cargarProductos().then( () => {
        // ejecutar despues de tener los productos
        // aplicar filtro
        this.filtrarProductos(termino);
      });
    } else {
      // aplicar el filtro
      this.filtrarProductos(termino) ;
    }

  }
  private filtrarProductos(termino: string) {
    /*se barre el arreglo y regresa un nuevo  arreglo */

    // console.log(this.productos);

    // se purga el arreglo para que no se repita en la busqueda
    this.productosFiltrado = [];
    // se para todo el termino a de la busqueda a minusculas
    termino = termino.toLocaleLowerCase();
    // se ejecuta un ciclo para recorrer todos los productos y buscar coincidencias
    this.productos.forEach(prod => {
  const titulolower = prod.titulo.toLocaleLowerCase();

  // se evalua si existen coincidencias
  if (prod.categoria.indexOf(termino) >= 0 || titulolower.indexOf(termino) >= 0 ) {
    this.productosFiltrado.push(prod);

  }
    });



  }
}
