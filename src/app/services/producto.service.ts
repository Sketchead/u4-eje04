import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

export interface carritoItem{
  producto: Producto,
  cantidad: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public products: Producto[];
  public carrito: carritoItem[] = [];

  constructor() { 
    this.products=[{
    product:"Azucar",
    descripcion:"Bolsa de 1k",
    photo:"https://picsum.photos/200/?random=1",
    precio:20},
    {product:"Leche",
      descripcion:"De 1 litro ",
    photo:"https://picsum.photos/200/?random=2",
    precio:32},
    {product:"Galletas",
      descripcion:"De Chocolate",
    photo:"https://picsum.photos/200/?id=3",
    precio:15},
  ];
  }

  public getProducts(){
    return this.products
  }

  public getCart(){
    return this.carrito
  }

  public getProductByIndex(i:number): Producto{
    return this.products[i];
  }

  public getProductByName(name:string): Producto{
    let i: Producto = this.products.find((products)=>{  //formula de flecha 
        return products.product===name;
      }
    );
   return i; //esto hace que solo se retorne el alumno que nosotros seleccionamos. 
  }

  public addToCart(p: Producto){
    if(this.carrito.length>0){
      let i: carritoItem = this.carrito.find((products)=>{  //formula de flecha 
        if(products.producto===p){
          products.cantidad+=1;
          return products
        } 
      })
      if(i==undefined){
        console.log('i es')
        this.carrito.push({producto: p, cantidad: 1});
      }
    }else{
      this.carrito.push({producto: p, cantidad: 1})
    }
  }

  public removeFromCart(i: number){
    if(this.carrito[i].cantidad==1){
      this.carrito.splice(i,1);
    }else{
      this.carrito[i].cantidad-=1;
    }
  }
}
/* 
public getStudentByControlNumber(controlnumber: string): Student {
  let item: Student = this.students.find((student)=> {
    return student.controlnumber===controlnumber;
  });
  return item;
} */