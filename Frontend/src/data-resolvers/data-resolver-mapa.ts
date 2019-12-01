import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { AppService } from "src/app/app.service";

@Injectable({
  providedIn: "root"
})
export class DataResolverMapa implements Resolve<any> {
  constructor(private services: AppService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.services.getUsuarios();
  }
}
