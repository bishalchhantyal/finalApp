import { Component, OnInit } from '@angular/core';
import { Pizza } from './pizza.model';
import { PizzasService } from './pizzas.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.page.html',
  styleUrls: ['./pizzas.page.scss'],
})
export class PizzasPage implements OnInit {
  pizzas: Pizza[];
  constructor(private pizzasService: PizzasService) { }

  ngOnInit() {
    this.pizzas = this.pizzasService.getAllPizzas();
  }
}
