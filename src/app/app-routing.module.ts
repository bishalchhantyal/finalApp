import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pizzas', pathMatch: 'full' },
  { path: 'pizzas',
   children: [
     {
     path: '',
     loadChildren: './pizzas/pizzas.module#PizzasPageModule'
     },
     {
       path: ':pizzaId',
       loadChildren:
       './pizzas/pizza-detail/pizza-detail.module#PizzaDetailPageModule'

     }
   ]
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
