import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidemenu",
  templateUrl: "./sidemenu.component.html",
  styleUrls: ["./sidemenu.component.scss"]
})
export class SidemenuComponent implements OnInit {
  public appPages = [
    {
      title: "Home",
      url: "/home"
    },
    {
      title: "Product",
      url: "/product"
    },
    {
      title: "Contact",
      url: "/contract"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
