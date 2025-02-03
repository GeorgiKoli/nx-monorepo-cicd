import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JaxAutocompleteComponent } from "../autocomplete/jax-autocomplete/jax-autocomplete.component";

@Component({
    selector: 'ng-jax-components-jax-components',
    imports: [CommonModule, JaxAutocompleteComponent],
    templateUrl: './jax-components.component.html',
    styleUrl: './jax-components.component.css',
    standalone: true
})
export class JaxComponentsComponent {}
