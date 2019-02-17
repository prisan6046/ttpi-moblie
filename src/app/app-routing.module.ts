import { SidemenuComponent } from "./components/sidemenu/sidemenu.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: SidemenuComponent,
    children: [
      {
        path: "home",
        loadChildren: "./components/home/home.module#HomePageModule"
      },
      {
        path: "product",
        loadChildren: "./components/product/product.module#ProductPageModule"
      },
      {
        path: "contract",
        loadChildren: "./components/contract/contract.module#ContractPageModule"
      },
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
      }
    ]
  },
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
