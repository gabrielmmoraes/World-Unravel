import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BuscaComponent } from "./busca.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { FilterPipe } from "./filter.pipe";

describe("BuscaComponent", () => {
  let component: BuscaComponent;
  let fixture: ComponentFixture<BuscaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuscaComponent, FilterPipe],
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
