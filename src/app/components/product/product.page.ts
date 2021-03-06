import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-product",
  templateUrl: "./product.page.html",
  styleUrls: ["./product.page.scss"]
})
export class ProductPage implements OnInit {
  public dataProduct: any = null;
  public loading: any = null;
  constructor(
    private _http: HttpClient,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.getProduct();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: "โปรดรอสักครู่",
      duration: 2500
    });
    await this.loading.present();
  }

  private getProduct(): void {
    this.presentLoading();
    this._http
      .get(`https://www.ttpi.co.th/api/token/api/product`)
      .toPromise()
      .then((value: any) => {
        this.dataProduct = value;
        console.log(this.dataProduct);
      })
      .catch((reason: any) => {
        console.log(reason);
      })
      .finally(() => {
        if (this.loading) {
          setTimeout(() => {
            this.loading.dismiss();
          }, 1000);
        }
        console.log("Success");
      });
  }
}
