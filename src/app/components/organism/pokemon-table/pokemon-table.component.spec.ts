import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokeapiService } from '@services/pokeapi/pokeapi.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { PokemonTableComponent } from './pokemon-table.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from '@molecules/header/header.component';
import { FooterComponent } from '@molecules/footer/footer.component';

describe('PokemonTableComponent', () => {
  let component: PokemonTableComponent;
  let fixture: ComponentFixture<PokemonTableComponent>;
  let _pokeapiService: PokeapiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonTableComponent, HeaderComponent, FooterComponent ],
      imports: [
        HttpClientTestingModule,
        MatToolbarModule
      ],
      providers: [
        PokeapiService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
