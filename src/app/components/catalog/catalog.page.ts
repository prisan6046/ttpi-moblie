import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.page.html",
  styleUrls: ["./catalog.page.scss"]
})
export class CatalogPage implements OnInit {
  public dataCatalog: any = null;
  private loading: any = null;
  constructor(
    private http: HttpClient,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.getCatalog();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: "โปรดรอสักครู่",
      duration: 2500
    });
    await this.loading.present();
  }

  private getCatalog(): void {
    this.presentLoading();
    this.http
      .get(`https://www.ttpi.co.th/api/token/api/catalog`)
      .toPromise()
      .then((value: any) => {
        console.log(value);
        this.dataCatalog = value;
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
