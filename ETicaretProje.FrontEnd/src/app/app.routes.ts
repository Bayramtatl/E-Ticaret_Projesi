import { Routes } from '@angular/router';
import { ContactComponent } from './components/shop/contact/contact.component';
import { MainComponent } from './components/shop/main/main.component';
import { ShopComponent } from './components/shop/shop/shop.component';
import { AboutComponent } from './components/shop/about/about.component';
import { MarketComponent } from './components/shop/market/market.component';
import { CartComponent } from './components/shop/cart/cart.component';
import { CheckoutComponent } from './components/shop/checkout/checkout.component';

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
    { path: '', redirectTo: 'shop/index', pathMatch: 'full' },
];