import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndivPlantComponent } from './indiv-plant.component';

describe('IndivPlantComponent', () => {
  let component: IndivPlantComponent;
  let fixture: ComponentFixture<IndivPlantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndivPlantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndivPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
