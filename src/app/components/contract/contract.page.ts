import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-contract",
  templateUrl: "./contract.page.html",
  styleUrls: ["./contract.page.scss"]
})
export class ContractPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  public informationFormSubmit(data: NgForm): void {
    console.log(data)
  }
}
