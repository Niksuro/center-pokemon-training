import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ModalTutorialComponent } from './modal-tutorial.component';

describe('ModalTutorialComponent', () => {
  let component: ModalTutorialComponent;
  let fixture: ComponentFixture<ModalTutorialComponent>;
  const dialogMock = {
    close: () => {},
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTutorialComponent ],
      providers: [
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
