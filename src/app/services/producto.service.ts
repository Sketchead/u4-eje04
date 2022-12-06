import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import {first, map} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

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

  constructor(private firestore: AngularFirestore) { 
    this.products=[];
  }

  public getProducts(){
    return this.firestore.collection('products').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Producto;
          const id = a.payload.doc.id;
          return {id,...data};
        });
      }));
  }

  public newProduct(product: Producto){
    this.firestore.collection('products').add(product);
  }

  public getProductById(id:string){
    return this.firestore.collection('products').doc(id).valueChanges();
  }

  
  public getCart(){
    return this.carrito
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
