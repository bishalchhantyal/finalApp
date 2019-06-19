import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PizzasPage } from './pizzas.page';
import { PizzaItemComponent } from './pizza-item/pizza-item.component';

const routes: Routes = [
  {
    path: '',
    component: PizzasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PizzasPage, PizzaItemComponent]
})
export class PizzasPageModule {}
