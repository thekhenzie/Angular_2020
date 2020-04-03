import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemondisplayComponent } from './pokemondisplay.component';

describe('PokemondisplayComponent', () => {
  let component: PokemondisplayComponent;
  let fixture: ComponentFixture<PokemondisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemondisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemondisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
