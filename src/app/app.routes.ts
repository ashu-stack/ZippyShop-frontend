import { Routes } from '@angular/router';
import { Category } from './components/category/category';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { ProductList } from './components/product-list/product-list';
import {Cart} from './components/cart/cart';
import { Product } from './components/product/product';
import { SearchedProduct } from './components/searched-product/searched-product';

import { WelcomeUser } from './components/welcome-user/welcome-user';

export const routes: Routes = [
    {
        path:'',
        pathMatch: 'full',

        loadComponent: () => {
            return import('./components/home/home').then(
                m => m.Home
            )
        }
    },
    {
    path:'login',
    pathMatch : 'full',

    loadComponent: () =>{
        return import('./components/login-component/login-component').then(
            m => m.LoginComponent
        )
    }
},

{
    path:'signup',
    pathMatch: 'full',

    loadComponent: () =>{
        return import('./components/signup-component/signup-component').then(
            m => m.SignupComponent
        )
    }
},

{
    path:'home',
    component: Category
},
{
    path: 'about',
    component: About
},
{
    path:'contact',
    component: Contact
},

{
    path: 'products/:category',
    component: ProductList
},

{
    path:'cart',
    component: Cart
},
{
    path:'displayproduct/:name',
    component: SearchedProduct
},

{
    path: 'welcome',
    component: WelcomeUser
}


];
