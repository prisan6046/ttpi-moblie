import { MyModule } from "./../../my-module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { CatalogPage } from "./catalog.page";
import { DetailComponent } from "./detail/detail.component";

const routes: Routes = [
  {
    path: "",
    component: CatalogPage
  },
  {
    path: "detail/:id",
    component: DetailComponent
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
  declarations: [CatalogPage, DetailComponent]
})
export class CatalogPageModule {}
