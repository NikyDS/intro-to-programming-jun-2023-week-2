import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { ShoppingListItemModel } from './models';

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
  shoppingList = signal([
    { id: '1', description: 'Shampoo', purchased: false },
    { id: '2', description: 'Lettuce', purchased: true },
  ]);
  onItemAdded(description: string) {
    console.log(`we got a new item ${description}`);
    const itemToAdd: ShoppingListItemModel = {
      id: crypto.randomUUID(),
      description: description,
      purchased: false,
    };
    this.shoppingList.mutate((list) => list.unshift(itemToAdd));
  }
}
