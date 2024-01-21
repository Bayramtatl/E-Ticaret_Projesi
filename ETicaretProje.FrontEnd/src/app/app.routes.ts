import { Routes } from '@angular/router';
import { ContactComponent } from './components/shop/contact/contact.component';
import { MainComponent } from './components/shop/main/main.component';
import { ShopComponent } from './components/shop/shop/shop.component';
import { AboutComponent } from './components/shop/about/about.component';
import { MarketComponent } from './components/shop/market/market.component';
import { CartComponent } from './components/shop/cart/cart.component';
import { CheckoutComponent } from './components/shop/checkout/checkout.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { CategorylistComponent } from './components/admin/categorylist/categorylist.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminRegisterComponent } from './components/admin/admin-register/admin-register.component';
import { ProductlistComponent } from './components/admin/productlist/productlist.component';

export const routes: Routes = [
    {
        path:'shop', component: ShopComponent, children:[
            {path:'index', component: MainComponent},
            {path:'contact', component: ContactComponent},
            {path:'about', component: AboutComponent},
            {path:'products', component: MarketComponent},
            {path:'cart', component: CartComponent},
            {path:'checkout', component: CheckoutComponent}
        ]
    },
    {
        path:'admin/login',component:AdminLoginComponent
    },
    {
        path:'admin/register',component:AdminRegisterComponent
    },
    {
        path:'admin',component:AdminComponent, children:[
            {path:'categorylist',component:CategorylistComponent},
            {path:'productlist',component:ProductlistComponent}
        ]
    },
    { path: '', redirectTo: 'shop/index', pathMatch: 'full' },
];