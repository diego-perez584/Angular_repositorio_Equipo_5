import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Manuel } from './manuel';

describe('Manuel', () => {
  let component: Manuel;
  let fixture: ComponentFixture<Manuel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Manuel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Manuel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
