import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './modulo-login/login/login.component';
import { ClientesComponent } from './modulo-resto/clientes/clientes.component';
import { CadastroClientesComponent } from './modulo-resto/cadastro-clientes/cadastro-clientes.component';
import { CadastroProdutosComponent } from './modulo-resto/cadastro-produtos/cadastro-produtos.component';
import { ProdutosComponent } from './modulo-resto/produtos/produtos.component';
import { PedidosComponent } from './modulo-resto/pedidos/pedidos.component';
import { CadstroPedidosComponent } from './modulo-resto/cadstro-pedidos/cadstro-pedidos.component';

import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LojaComponent } from './modulo-resto/loja/loja.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import CheckLogged from './checklogged';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'loja', component: LojaComponent, canActivate: [CheckLogged] },
  { path: 'clientes', component: ClientesComponent, canActivate: [CheckLogged] },
  { path: 'clientes/:id', component: CadastroClientesComponent, canActivate: [CheckLogged] },
  { path: 'produtos', component: ProdutosComponent, canActivate: [CheckLogged] },
  { path: 'produtos/:id', component: CadastroProdutosComponent, canActivate: [CheckLogged] },
  { path: 'pedidos', component: PedidosComponent, canActivate: [CheckLogged] },
  { path: 'pedidos/:id', component: CadstroPedidosComponent, canActivate: [CheckLogged] },
  { path: '*', redirectTo: '' }
];

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    ClientesComponent,
    CadastroClientesComponent,
    ProdutosComponent,
    CadastroProdutosComponent,
    PedidosComponent,
    CadstroPedidosComponent,
    LojaComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
