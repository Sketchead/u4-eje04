"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4851],{4851:(x,u,i)=>{i.r(u),i.d(u,{HomePageModule:()=>_});var p=i(9808),n=i(4153),g=i(4182),d=i(4740),m=i(655),t=i(5e3),h=i(186);function f(o,c){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"ion-card")(2,"ion-row",6),t.NdJ("click",function(){const s=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.getProductById(s.id))}),t._UZ(3,"img",8),t.TgZ(4,"ion-card-header")(5,"ion-card-title"),t._uU(6),t.qZA(),t.TgZ(7,"ion-card-subtitle"),t._uU(8),t.qZA(),t._UZ(9,"hr"),t._uU(10," Descripci\xf3n: "),t._UZ(11,"br"),t._uU(12),t.qZA(),t.TgZ(13,"ion-button",9),t.NdJ("click",function(a){const l=t.CHM(e).$implicit,Z=t.oxw();return a.stopPropagation(),t.KtG(Z.addToCart(l))}),t._UZ(14,"ion-icon",4),t.qZA()()(),t.BQk()}if(2&o){const e=c.$implicit;t.xp6(3),t.s9C("src",e.photo,t.LSH),t.xp6(3),t.Oqu(e.product),t.xp6(2),t.hij("Precio: $",e.precio,""),t.xp6(4),t.hij(" ",e.descripcion," ")}}const P=[{path:"",component:(()=>{class o{constructor(e,r,a){this.productService=e,this.router=r,this.alertCtrl=a,this.productService.getProducts().subscribe(s=>{this.products=s})}getProductById(e){this.router.navigate(["view-product"],{queryParams:{pos:e}})}viewCart(){this.router.navigate(["carrito"])}addToCart(e){this.productService.addToCart(e)}addProduct(){return(0,m.mG)(this,void 0,void 0,function*(){yield(yield this.alertCtrl.create({header:"Nuevo producto",inputs:[{name:"product",placeholder:"Nombre"},{name:"precio",type:"number",placeholder:"Precio",min:1},{name:"descripcion",type:"textarea",placeholder:"Descripci\xf3n"},{name:"photo",placeholder:"link a foto"}],buttons:[{text:"Cancelar"},{text:"Crear",handler:r=>{this.productService.newProduct({product:r.product,precio:r.precio,descripcion:r.descripcion,photo:r.photo})}}]})).present()})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(h.U),t.Y36(d.F0),t.Y36(n.Br))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-home"]],decls:14,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],[4,"ngFor","ngForOf"],["slot","fixed","vertical","bottom","horizontal","end"],["name","add"],["side","top"],[3,"click"],["name","cart"],["width","200","height","200",3,"src"],["id","addToCartBtn",3,"click"]],template:function(e,r){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3," Lista de productos "),t.qZA()()(),t.TgZ(4,"ion-content",1),t.YNc(5,f,15,4,"ng-container",2),t.TgZ(6,"ion-fab",3)(7,"ion-fab-button"),t._UZ(8,"ion-icon",4),t.qZA(),t.TgZ(9,"ion-fab-list",5)(10,"ion-fab-button",6),t.NdJ("click",function(){return r.viewCart()}),t._UZ(11,"ion-icon",7),t.qZA(),t.TgZ(12,"ion-fab-button",6),t.NdJ("click",function(){return r.addProduct()}),t._UZ(13,"ion-icon",4),t.qZA()()()()),2&e&&(t.Q6J("translucent",!0),t.xp6(4),t.Q6J("fullscreen",!0),t.xp6(1),t.Q6J("ngForOf",r.products))},dependencies:[p.sg,n.YG,n.PM,n.Zi,n.tO,n.Dq,n.W2,n.IJ,n.W4,n.zq,n.Gu,n.gu,n.Nd,n.wd,n.sr],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}#addToCartBtn[_ngcontent-%COMP%]{align-self:flex-end}"]}),o})()}];let C=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.Bz.forChild(P),d.Bz]}),o})(),_=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.ez,g.u5,n.Pc,C]}),o})()}}]);