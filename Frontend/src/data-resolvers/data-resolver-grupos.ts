import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Resolve } from "@angular/router";
import { AppService } from "src/app/app.service";

@Injectable({
  providedIn: "root"
})
export class DataResolverGrupos implements Resolve<any> {
  constructor(private services: AppService) {}

  resolve(): Observable<any> {
    return this.services.getGrupos();
  }
}
