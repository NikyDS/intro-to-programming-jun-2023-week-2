import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { ShoppingListItemModel } from './models';
import { Store } from '@ngrx/store';
import { ShoppingFeatureEvents } from './state/feature.actions';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CommonModule,
    CreateComponent,
    ListComponent,
  ],
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  constructor(private store: Store) {
    store.dispatch(ShoppingFeatureEvents.entered());
  }
}
