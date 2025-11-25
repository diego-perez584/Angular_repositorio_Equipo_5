import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AleComponent } from './ale';

describe('Ale', () => {
  let component: AleComponent;
  let fixture: ComponentFixture<AleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
