import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GruposComponent } from "./grupos.component";
import { ActivatedRoute } from "@angular/router";

describe("GruposComponent", () => {
  let component: GruposComponent;
  let fixture: ComponentFixture<GruposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GruposComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                data: {
                  grupos: [{}]
                }
              }
            }
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Deve compilar", () => {
    expect(component).toBeTruthy();
  });
});
