import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductoService,carritoItem } from '../services/producto.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  public total: number = 0;
  public carrito: carritoItem[]; 
  handlerMessage = '';
  constructor(private productService: ProductoService,private alertController: AlertController,private router: Router) { 
    this.carrito = this.productService.getCart();
    this.carrito.forEach(i => this.total+=(i.producto.precio*i.cantidad));

  }

  async presentAlert(i:number) {
    const alert = await this.alertController.create({
      header: '¿Quiere borrar un producto del carrito?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'Sí',
          role: 'confirm',
          handler: () => {
            this.total -= this.carrito[i].producto.precio
            this.removeFromCart(i);
          
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    
  }

  public removeFromCart(i: number){
    if(this.carrito[i].cantidad==1){
      this.carrito.splice(i,1);
    }else{
      this.carrito[i].cantidad-=1;
    }
  }

 
  public getProductByIndex(i:number){
    this.router.navigate(['view-product'],{
      queryParams: {pos: i},
    })
  }

  ngOnInit() {
  }

  
}
