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

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'loja', component: LojaComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/:id', component: CadastroClientesComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'produtos/:id', component: CadastroProdutosComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'pedidos/:id', component: CadstroPedidosComponent },
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
