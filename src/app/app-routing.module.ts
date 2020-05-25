import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailsComponent} from './components/product-details/product-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FruitsComponent } from './fruits/fruits.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { OrdersComponent } from './ecommerce/orders/orders.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'user', component: BoardUserComponent},
  { path: 'admin', component: BoardAdminComponent},
  { path: 'products', component: ProductsListComponent},
  { path: 'products/:id', component: ProductDetailsComponent},
  { path: 'add', component: AddProductComponent},
  { path: 'fruits', component: FruitsComponent},
  { path: 'vegetables', component: VegetablesComponent},
  { path: 'ecommerce', component: EcommerceComponent},
  { path: 'userOrders', component: UserOrdersComponent},
  { path: 'orders', component: AllOrdersComponent},
  { path: 'cart', component: OrdersComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
