import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoQueMeGustaComponent } from './lo-que-me-gusta.component';

describe('LoQueMeGusta', () => {
  let component: LoQueMeGustaComponent;
  let fixture: ComponentFixture<LoQueMeGustaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoQueMeGustaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoQueMeGustaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
