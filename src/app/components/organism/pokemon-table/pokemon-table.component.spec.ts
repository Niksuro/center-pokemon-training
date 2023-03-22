import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokeapiService } from '@services/pokeapi/pokeapi.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PokemonTableComponent } from './pokemon-table.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from '@molecules/header/header.component';
import { FooterComponent } from '@molecules/footer/footer.component';
import { of } from 'rxjs';

describe('PokemonTableComponent', () => {
  let component: PokemonTableComponent;
  let fixture: ComponentFixture<PokemonTableComponent>;
  let _pokeapiService: PokeapiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonTableComponent, HeaderComponent, FooterComponent],
      imports: [HttpClientTestingModule, MatToolbarModule],
      providers: [PokeapiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTableComponent);
    component = fixture.componentInstance;
    _pokeapiService = TestBed.get(PokeapiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if the pokemon list is received', () => {
    jest.spyOn(_pokeapiService, 'getAllPokemon').mockReturnValue(
      of({
        results: [
          {
            name: 'bulbasaur',
            url: '',
          },
        ],
      })
    );
    component.getPokemonList();
    expect(component.pokemonList[0].name).toBe('bulbasaur');
  });

  it('should check if handleButtonBattleMode enable battleMode', () => {
    component.battleMode = false;
    component.handleButtonBattleMode();
    expect(component.battleMode).toBeTruthy;
  });

  it('should check if handleButtonBattleMode disable battleMode', () => {
    component.battleMode = true;
    component.handleButtonBattleMode();
    expect(component.battleMode).toBeFalsy;
  });
  it('should check if handlePokemonSelected add a pokemon', () => {
    component.battleMode = true;
    component.handlePokemonSelected({
      name: 'bulbasaur',
      id: 0,
      image: '',
      type: [],
      health: 0,
      attack: 0,
      defense: 0,
      specialAttack: 0,
      specialDefense: 0,
      speed: 0,
    });
    expect(component.selectedForBattleList[0].name).toBe('bulbasaur');
  });
});
