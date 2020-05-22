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

const routes: Routes = [
  { path: 'home', component: HomeComponent},
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
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
