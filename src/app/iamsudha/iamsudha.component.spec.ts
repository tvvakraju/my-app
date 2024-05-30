import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IamsudhaComponent } from './iamsudha.component';

describe('IamsudhaComponent', () => {
  let component: IamsudhaComponent;
  let fixture: ComponentFixture<IamsudhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IamsudhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IamsudhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
