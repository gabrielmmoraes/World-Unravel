import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacarLideresComponent } from './placar-lideres.component';

describe('PlacarLideresComponent', () => {
  let component: PlacarLideresComponent;
  let fixture: ComponentFixture<PlacarLideresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacarLideresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacarLideresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
