import { ComponentFixture, TestBed } from '@angular/core/testing';


import { GladisComponentComponent } from './gladis-component.component';

describe('GladisComponent', () => {
  let component: GladisComponentComponent;
  let fixture: ComponentFixture<GladisComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GladisComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GladisComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
