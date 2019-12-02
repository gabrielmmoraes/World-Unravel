import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MapaComponent } from "./mapa.component";
import { ActivatedRoute } from "@angular/router";
import { Dificuldade } from "src/models/dificuldade/dificuldade";
import { PontuacaoComponent } from "../pontuacao/pontuacao.component";
import { AgmMap, AgmMarker, MapsAPILoader } from "@agm/core";

describe("MapaComponent", () => {
  let component: MapaComponent;
  let fixture: ComponentFixture<MapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapaComponent, PontuacaoComponent, AgmMap, AgmMarker],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                data: {
                  usuarios: [
                    {
                      id: 1,
                      nomeDoUsuario: "Gabriela",
                      dificuldade: Dificuldade.MEDIO,
                      coordenadas: [
                        {
                          latitude: -22.862717216466017,
                          longitude: -43.22590030788871
                        },
                        {
                          latitude: -22.86168907255886,
                          longitude: -43.22841085552665
                        }
                      ]
                    },
                    {
                      id: 2,
                      nomeDoUsuario: "Matheus",
                      dificuldade: Dificuldade.MEDIO,
                      coordenadas: [
                        {
                          latitude: -22.860898187336925,
                          longitude: -43.22313226818534
                        },
                        {
                          latitude: -22.861886793145143,
                          longitude: -43.22154440044852
                        }
                      ]
                    },
                    {
                      id: 3,
                      nomeDoUsuario: "Alice",
                      dificuldade: Dificuldade.MEDIO,
                      coordenadas: [
                        {
                          latitude: -22.85666083629548,
                          longitude: -43.23218822479248
                        },
                        {
                          latitude: -22.858088934424536,
                          longitude: -43.23132909893485
                        }
                      ]
                    },
                    {
                      id: 4,
                      nomeDoUsuario: "Mario",
                      dificuldade: Dificuldade.MEDIO,
                      coordenadas: [
                        {
                          latitude: -22.850541605215252,
                          longitude: -43.23407482206835
                        },
                        {
                          latitude: -22.85200485074053,
                          longitude: -43.23315214216723
                        }
                      ]
                    },
                    {
                      id: 5,
                      nomeDoUsuario: "Artur",
                      dificuldade: Dificuldade.MEDIO,
                      coordenadas: [
                        {
                          latitude: -22.851826889288102,
                          longitude: -43.23514770567431
                        },
                        {
                          latitude: -22.854327625335397,
                          longitude: -43.23369026184082
                        }
                      ]
                    },
                    {
                      id: 6,
                      nomeDoUsuario: "Lucas",
                      dificuldade: Dificuldade.MEDIO,
                      coordenadas: [
                        {
                          latitude: -22.846465737500093,
                          longitude: -43.23777465116359
                        },
                        {
                          latitude: -22.844666265451313,
                          longitude: -43.23607949506618
                        }
                      ]
                    }
                  ]
                }
              }
            }
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Deve compilar", () => {
    expect(component).toBeTruthy();
  });

  it("Deve selecionar o primeiro usuário da rota como o usuário logado", () => {
    expect(component.usuario.nome).toBe("Gabriela");
  });
});
