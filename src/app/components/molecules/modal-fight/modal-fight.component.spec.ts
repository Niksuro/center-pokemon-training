import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokeapiService } from '@services/pokeapi/pokeapi.service';

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
    component.firstPokemon = {
      name: '',
      id: 0,
      image: '',
      types: [],
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
      types: [],
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
});
