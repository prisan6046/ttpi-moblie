import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ProductPage } from "./product.page";
import { MyModule } from "src/app/my-module";
import { DetialComponent } from "./detial/detial.component";

const routes: Routes = [
  {
    path: "",
    component: ProductPage
  },
  {
    path: "detial/:id",
    component: DetialComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MyModule
  ],
  declarations: [ProductPage, DetialComponent]
})
export class ProductPageModule {}
