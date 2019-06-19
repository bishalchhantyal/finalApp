import { Injectable } from '@angular/core';
import { Pizza } from './pizza.model';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {
  private pizzas: Pizza[] = [
    {
      id: 'r1',
      title: 'papperoni',
      imageUrl: 'https://www.wikihow.com/Make-a-Chicken-and-Pepperoni-Pizza#/Image:Make-a-Chicken-and-Pepperoni-Pizza-Step-11.jpg',
      ingredients: ['omato sauge ladle 1',
      'shredded mozzarella  handful',
      'danish salami  5 pieces',
      'calabrese salami olives 10']
    },
    {
      id: 'r2',
      title: 'hotdamn',
      imageUrl: '',
      ingredients: ['tomato sauce   1',
      'chipotle sauce  1 Tbsp',
      'Shredded mozzarella  handful',
      'Calabrese Salami 8 pieces',
      'N’Duja Sausage 8 pieces',
      'Sliced Jalapeños   pinch',
      'Cook in oven 3 minutes',
      'slice into 6 pieces',
      'finish with ricott']
    },
    {
      id: 'r3',
      title: 'queenmargita',
      imageUrl: '',
      ingredients: ['tomato sauge ladle 1',
      'shredded mozzarella  handful',
      'danish salami  5 pieces',
      'calabrese salami olives 10']
    },
    {
      id: 'Btriu2JMo1hOcptcQ3w8',
      title: 'primavera',
      imageUrl: '',
      ingredients: [ 'tomato sauce ladle  1',
        'Shredded mozzarella  handful',
        'cook in oven 3 minutes',
        'Slice into 6',
        'Rocket   handful',
        'Prosciutto slices 3',
        'Shaved parmesan  pinch'
        ]

    },
    {
      id: 'r4',
      title: 'Vegan Suprema',
      imageUrl: '',
      ingredients: ['Tomato sauce ladle  1',
        'Vegan Cheese   1/2 cup',
        'Mushroom    1/2 cup',
        'Roast Capsicum 1/2 cup',
        'Sliced Red onion  1/4 cup',
        'Vegan sausage and bacon  1/4 cup',
        'Cook in oven 3 minutes ',
        'slice into 6 piece',
        'fresh basil leaves  6'
        ]

    }
      ];
      getAllPizzas() {
        return [...this.pizzas];
      }
  getPizza(pizzaId: string) {
    return {...this.pizzas.find(pizza => {
      return pizza.id === pizzaId;
    })};
  }
  deletePizza(pizzaId: string) {
    this.pizzas = this.pizzas.filter( pizza => {
      return pizza.id !== pizzaId;
    });
  }
  /* addPizza(pizzaId: string) {
    this.pizzas = this.pizzas.push( pizza: {
      return;
    })
  }*/

}
