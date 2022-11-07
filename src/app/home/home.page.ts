import { Component } from '@angular/core';
import { Producto } from './../models/producto';
import { ProductoService } from '../services/producto.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public products: Producto[];
  constructor(public productService: ProductoService, private router: Router, private alertCtrl: AlertController ) {
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

  async addProduct() {
    const alert = await this.alertCtrl.create({
      header: 'Nuevo producto',
      inputs: [
        {
          name:'product',
          placeholder: 'Nombre',
        },
        {
          name:'precio',
          type: 'number',
          placeholder: 'Precio',
          min: 1
        },
        {
          name:'descripcion',
          type: 'textarea',
          placeholder: 'Descripción',
        },
        {
          name:'photo',
          placeholder: 'link a foto',
        }
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Crear',
          handler: (inputs: {product: string, precio: number,descripcion:string,photo:string}) => {
            this.products.push({product:inputs.product, precio:inputs.precio, descripcion:inputs.descripcion, photo:inputs.photo});
          }
        }
      ]

      
    });

    await alert.present();
  }
}
