import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/items/items.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { UserComponent } from './components/user/user.component';
import { GuardService } from 'src/app/services/auth/guard.service'
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
  {
    path: 'items',
    component: ItemsComponent, canActivate: [GuardService]
  },
  {
    path: 'add',
    component: AddItemComponent, canActivate: [GuardService]
  },
  {
    path: 'home',
    component: HomeComponent, canActivate: [GuardService]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent, canActivate: [GuardService]
  },
  {
    path: 'contact',
    component: ContactComponent, canActivate: [GuardService]
  },
  {
    path: 'products',
    component: ProductsComponent, canActivate: [GuardService]
  },
  {
    path: 'product/:idProd',
    component: SingleProductComponent, canActivate: [GuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'users',
    component: UserComponent, canActivate: [GuardService]
  },
  {
    path: 'todos',
    component: TodoComponent, canActivate: [GuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
