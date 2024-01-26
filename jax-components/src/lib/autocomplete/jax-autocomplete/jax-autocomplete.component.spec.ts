import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JaxAutocompleteComponent } from './jax-autocomplete.component';

describe('JaxAutocompleteComponent', () => {
  let component: JaxAutocompleteComponent;
  let fixture: ComponentFixture<JaxAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JaxAutocompleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JaxAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
