import { Injectable } from '@angular/core';
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
    let i: Producto = this.products.find((products)=>{  //formula de flecha 
        return products.product===name;
      }
    );
   return i; //esto hace que solo se retorne el alumno que nosotros seleccionamos. 
  }
}
/* 
public getStudentByControlNumber(controlnumber: string): Student {
  let item: Student = this.students.find((student)=> {
    return student.controlnumber===controlnumber;
  });
  return item;
} */