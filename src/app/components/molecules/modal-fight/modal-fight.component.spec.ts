import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokeapiService } from '@services/pokeapi/pokeapi.service';
import { of } from 'rxjs';

import { ModalFightComponent } from './modal-fight.component';

describe('ModalFightComponent', () => {
  let component: ModalFightComponent;
  let fixture: ComponentFixture<ModalFightComponent>;
  let _pokeapiService: PokeapiService;
  const dialogMock = {
    close: () => {},
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFightComponent ],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        MatIconModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: MAT_DIALOG_DATA, useValue: [] },
        PokeapiService,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFightComponent);
    component = fixture.componentInstance;
    _pokeapiService = TestBed.get(PokeapiService);
    component.firstPokemon = {
      name: '',
      id: 0,
      image: '',
      types: ['grass'],
      health: 0,
      attack: 0,
      defense: 0,
      specialAttack: 0,
      specialDefense: 0,
      speed: 0,
    };
    component.secondPokemon = {
      name: '',
      id: 0,
      image: '',
      types: ['fire'],
      health: 0,
      attack: 0,
      defense: 0,
      specialAttack: 0,
      specialDefense: 0,
      speed: 0,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should request the getTypeDamageRelation function, and get the damage types information', () => {
    jest.spyOn(_pokeapiService, 'getTypeData').mockReturnValue(
      of({
        damage_relations: {
          double_damage_from : [{name: 'fire', url: ''}],
          double_damage_to: [{name: 'fire', url: ''}],
          half_damage_from : [{name: 'fire', url:'' }],
          half_damage_to: [{name: 'fire', url: ''}],
          no_damage_from : [{name: 'fire', url: ''}],
          no_damage_to: [{name: 'fire', url: ''}],
      }
      }
    ));
    component.getTypeDamageRelation();
    expect(component.typeDamageFirstPokemon[0].doubleDamageFrom).toEqual(['fire']);
  });

  it('should request the getTypeDamageRelation function, and get the damage types information', () => {
    jest.spyOn(_pokeapiService, 'getTypeData').mockReturnValue(
      of({
        damage_relations: {
          double_damage_from : [{name: 'grass', url: ''}],
          double_damage_to: [{name: 'grass', url: ''}],
          half_damage_from : [{name: 'grass', url:'' }],
          half_damage_to: [{name: 'grass', url: ''}],
          no_damage_from : [{name: 'grass', url: ''}],
          no_damage_to: [{name: 'grass', url: ''}],
      }
      }
    ));
    component.getTypeDamageRelation();
    expect(component.typeDamageFirstPokemon[0].doubleDamageFrom).toEqual(['grass']);
  });
});
