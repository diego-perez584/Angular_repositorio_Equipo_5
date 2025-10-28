import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiegoPerezComponent } from './diego-perez';

describe('DiegoPerez', () => {
  let component: DiegoPerezComponent;
  let fixture: ComponentFixture<DiegoPerezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiegoPerezComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiegoPerezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
