import { Component, OnInit } from '@angular/core';
import { ProductoService,carritoItem } from '../services/producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  public total: number = 0;
  public carrito: carritoItem[]; 
  constructor(private productService: ProductoService) { 
    this.carrito = this.productService.getCart();
    this.carrito.forEach(i => this.total+=(i.producto.precio*i.cantidad))


  }

    ngOnInit() {
  }
  

}
