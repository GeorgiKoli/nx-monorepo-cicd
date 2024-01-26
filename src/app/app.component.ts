import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

import { JaxAutocompleteComponent } from '@jax-compsci/ng-jax-components';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, JaxAutocompleteComponent],
  selector: 'ng-jax-components-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-jax-components';
}
