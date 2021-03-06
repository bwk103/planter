import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantComponent } from './plant.component';

describe('PlantComponent', () => {
  let component: PlantComponent;
  let fixture: ComponentFixture<PlantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
