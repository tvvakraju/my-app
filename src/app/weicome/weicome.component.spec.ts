import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeicomeComponent } from './weicome.component';

describe('WeicomeComponent', () => {
  let component: WeicomeComponent;
  let fixture: ComponentFixture<WeicomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeicomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeicomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
