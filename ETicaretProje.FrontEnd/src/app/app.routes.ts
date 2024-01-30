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
import { InfoComponent } from './components/admin/info/info.component';
import { AuthGuard } from './services/auth.guard';
import { RegisterComponent } from './components/shop/register/register.component';
import { LoginComponent } from './components/shop/login/login.component';
import { AuthGuardCustomer } from './services/auth.guard.customer';
import { OrdersComponent } from './components/shop/orders/orders.component';
import { UserinfoComponent } from './components/shop/userinfo/userinfo.component';
import { OrderlistComponent } from './components/admin/orderlist/orderlist.component';

export const routes: Routes = [
    {
        path:'shop', component: ShopComponent, children:[
            {path:'index', component: MainComponent},
            {path:'contact', component: ContactComponent},
            {path:'about', component: AboutComponent},
            {path:'products', component: MarketComponent},
            {path:'cart', component: CartComponent,canActivate:[AuthGuardCustomer]},
            {path:'checkout', component: CheckoutComponent, canActivate:[AuthGuardCustomer]},
            {path:'register', component: RegisterComponent},
            {path:'login', component: LoginComponent},
            {path:'orders', component: OrdersComponent,canActivate:[AuthGuardCustomer]},
            {path:'userinfo', component: UserinfoComponent,canActivate:[AuthGuardCustomer]}
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
            {path:'categorylist',component:CategorylistComponent, canActivate:[AuthGuard]},
            {path:'productlist',component:ProductlistComponent, canActivate:[AuthGuard]},
            {path: 'info', component:InfoComponent, canActivate:[AuthGuard]},
            {path: 'orderlist', component:OrderlistComponent, canActivate:[AuthGuard]}
        ]
    },
    { path: '', redirectTo: 'shop/index', pathMatch: 'full' },
];