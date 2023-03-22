import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { ModalStatsComponent } from './modal-stats.component';

describe('ModalStatsComponent', () => {
  let component: ModalStatsComponent;
  let fixture: ComponentFixture<ModalStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalStatsComponent ],
      imports: [MatIconModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalStatsComponent);
    component = fixture.componentInstance;
    component.pokemonData = {
      name: '',
      id: 0,
      image: '',
      type: [],
      health: 0,
      attack: 0,
      defense: 0,
      specialAttack: 0,
      specialDefense: 0,
      speed: 0
    }
    fixture.detectChanges();
  });

  it('should create', () => {    
    expect(component).toBeTruthy();
  });
});
