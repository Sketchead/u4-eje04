import { Component } from '@angular/core';
import { Producto } from './../models/producto';
import { ProductoService } from '../services/producto.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public products: Producto[];
  constructor(public productService: ProductoService, private router: Router ) {
      this.products=this.productService.getProducts();
  }

  public getProductByName(name:string){
    this.router.navigate(['view-product'],{
      queryParams: {name: name},
    })
  }

  public getProductByIndex(i:number){
    this.router.navigate(['view-product'],{
      queryParams: {pos: i},
    })
  }
 
  public viewCart(){
    this.router.navigate(['carrito'])
  }

  public addToCart(i: Producto){
    this.productService.addToCart(i);
  }
}
