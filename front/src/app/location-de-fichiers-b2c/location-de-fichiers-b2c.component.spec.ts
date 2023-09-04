import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDeFichiersB2cComponent } from './location-de-fichiers-b2c.component';

describe('LocationDeFichiersB2cComponent', () => {
  let component: LocationDeFichiersB2cComponent;
  let fixture: ComponentFixture<LocationDeFichiersB2cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationDeFichiersB2cComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationDeFichiersB2cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
