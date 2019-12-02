import { Injectable } from "@angular/core";
import { HttpResponse, HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { timeout, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor(public http: HttpClient) {}

  private _graphQLQueryToPOSTJson({
    query,
    variables = null,
    operationName = null
  }: {
    query: string;
    variables?: string;
    operationName?: string;
  }): string {
    const body = `{"query": "${query}", "variables": ${variables}, "operationName": ${operationName}}`;
    return body;
  }

  public getUsuarios(): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8"
    });

    const query = `{
        usuarios {
            id
            nomeDoUsuario
            coordenadas {
            latitude
            longitude
            }
            dificuldade
        }
    }`;

    const body = this._graphQLQueryToPOSTJson({ query });

    const options = { headers };

    return this.http.post<HttpResponse<any>>(
      "http://localhost:5000/api",
      body,
      options
    );
  }

  public getGrupos(): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8"
    });

    const query = `{
        grupos {
            id
            nomeDoGrupo
            usuarios {
                id
            }
        }
    }`;

    const body = this._graphQLQueryToPOSTJson({ query });

    const options = { headers };

    return this.http.post<HttpResponse<any>>(
      "http://localhost:5000/api",
      body,
      options
    );
  }
}
