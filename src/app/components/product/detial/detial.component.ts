import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-detial",
  templateUrl: "./detial.component.html",
  styleUrls: ["./detial.component.scss"]
})
export class DetialComponent implements OnInit {
  private loading: any = null;
  public dataDetail: any = null;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.getDetail();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: "โปรดรอสักครู่",
      duration: 2500
    });
    await this.loading.present();
  }

  private getDetail(): void {
    this.presentLoading();
    this.http
      .get(
        `https://www.ttpi.co.th/api/token/api/product?id=${this.route.snapshot.paramMap.get(
          "id"
        )}`
      )
      .toPromise()
      .then((value: any) => {
        this.dataDetail = value;
        console.log(value);
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
