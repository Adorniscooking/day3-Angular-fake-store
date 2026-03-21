import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Product } from './product/product';
import { Contact } from './contact/contact';
import { Cart } from './cart/cart';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'product',component:Product},
    {path:'contact',component:Contact},
    {path:'cart',component:Cart},
];
