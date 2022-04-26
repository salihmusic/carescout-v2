import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareScouterProfileComponent } from './care-scouter-profile.component';

describe('CareScouterProfileComponent', () => {
  let component: CareScouterProfileComponent;
  let fixture: ComponentFixture<CareScouterProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareScouterProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareScouterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
