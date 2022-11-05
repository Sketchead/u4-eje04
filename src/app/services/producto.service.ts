//import { ProductoService } from './producto.service';
import { Injectable } from '@angular/core';
//import {ProductoService} from '../services/producto.service'
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public products: Producto[];

  constructor() { 
    this.products=[{product:"Azucar",
    descripcion:"Bolsa de 1k",
  photo:"https://picsum.photos/500/?random=2",
  precio:20},
  {product:"Leche",
    descripcion:"Bolsa de 1k",
  photo:"https://picsum.photos/500/?random=2",
  precio:20},
  {product:"Galletas",
    descripcion:"Bolsa de 1k",
  photo:"https://picsum.photos/500/?random=2",
  precio:20},
];
  }

  public getProducts(){
    return this.products
  }

  public getProductByName(name:string): Producto{
    let i: Producto;
    i = this.products.find(
      (products)=>{  //formula de flecha 
        return products.product===name;
      }
    );
   return i; //esto hace que solo se retorne el alumno que nosotros seleccionamos. 
  }
}

