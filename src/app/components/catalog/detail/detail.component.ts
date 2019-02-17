import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit {
  private loading: any = null;
  public dataCatalog: any = null;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.getDataCatalog();
  }

  public onDownload(path: string) {
    window.open(
      `https://www.ttpi.co.th/catalog/upload/file/${path}`,
      "_system",
      "location=yes"
    );
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: "โปรดรอสักครู่",
      duration: 2500
    });
    await this.loading.present();
  }

  public getDataCatalog(): void {
    this.presentLoading();
    this.http
      .get(
        `https://www.ttpi.co.th/api/token/api/catalog?id=${this.route.snapshot.paramMap.get(
          "id"
        )}`
      )
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
