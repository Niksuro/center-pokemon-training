import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokeapiService } from '@services/pokeapi/pokeapi.service';
import { of } from 'rxjs/internal/observable/of';
import { PokemonCardComponent } from './pokemon-card.component';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;
  let _pokeapiService: PokeapiService;
  const dialogMock = {
    close: () => {},
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonCardComponent],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        MatCardModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: MAT_DIALOG_DATA, useValue: [] },
        PokeapiService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    _pokeapiService = TestBed.get(PokeapiService);
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
      speed: 0,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should store a pokemon data after consult _pokeapiService.getPokemon', () => {
    jest.spyOn(_pokeapiService, 'getPokemon').mockReturnValue(
      of({
        types: [{ slot: 1, type: { name: 'grass' } }],
        sprites: {
          front_default: 'image',
        },
        stats: [
          { base_stat: 1 },
          { base_stat: 1 },
          { base_stat: 1 },
          { base_stat: 1 },
          { base_stat: 1 },
          { base_stat: 1 },
        ],
      })
    );
    component.getPokemonData();
    expect(component.pokemonData.image).toBe('image');
  });

  it('should check if handleClickCard select the pokemon', () => {
    component.battleMode = true;
    component.selectedForBattle = true;
    component.handleClickCard();
    expect(component.selectedPokemon).toBeTruthy();
  });

  it('should check if handleClickCard open the modal', () => {
    component.battleMode = false;
    component.handleClickCard();
    expect(component.selectedPokemon).toBeFalsy();
  });
});
