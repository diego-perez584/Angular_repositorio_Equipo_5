import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BraianComponente } from './braian';

describe('Braian', () => {
  let component: BraianComponente;
  let fixture: ComponentFixture<BraianComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BraianComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BraianComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
