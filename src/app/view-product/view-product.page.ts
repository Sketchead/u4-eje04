import { Producto } from './../models/producto';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.page.html',
  styleUrls: ['./view-product.page.scss'],
})
export class ViewProductPage implements OnInit {
  public product: Producto;

  constructor(private productService: ProductoService, private aRoute: ActivatedRoute) { 
    this.product = {
      product: "",
      descripcion: "",
      photo: "",
      precio: 0
    }
  }

  ngOnInit() {
    this.aRoute.queryParams.subscribe((params) => {
        this.productService.getProductById(params.pos).subscribe(i => {
          this.product = i as Producto
        })
    });
  }

}
