import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzasService } from '../pizzas.service';
import { Pizza } from '../pizza.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.page.html',
  styleUrls: ['./pizza-detail.page.scss'],
})
export class PizzaDetailPage implements OnInit {
 loadPizza: Pizza;
  constructor(private activatedRoute: ActivatedRoute, private pizzasService: PizzasService, private router: Router,
              private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('pizzaId')) {
        this.router.navigate(['/pizzas']);
        return;
      }
      const pizzaId = paramMap.get('pizzaId');
      this.loadPizza = this.pizzasService.getPizza(pizzaId);
    });
  }
  onDeletePizza() {
    this.alertCtrl.create({header: 'are you sure?', message: 'do you really want to delete?',
     buttons: [ {
       text: 'Cancel',
       role: 'cancel'

     },
     {
       text: 'Delete',
       handler: () => {
        this.pizzasService.deletePizza(this.loadPizza.id);
        this.router.navigate(['/pizzas']);

       }
     }
    ]

    }).then(alertEl => {
      alertEl.present();
    });
  }
  /* onAddPizza() {
    this.pizzasService.addPizza(this.pizzId);
  } */
}


