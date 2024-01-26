import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JaxComponentsComponent } from './jax-components.component';

describe('JaxComponentsComponent', () => {
  let component: JaxComponentsComponent;
  let fixture: ComponentFixture<JaxComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JaxComponentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JaxComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
