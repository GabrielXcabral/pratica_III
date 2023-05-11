import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MantemUsuarioComponent} from './usuario/mantem-usuario/mantem-usuario.component';
import {ListagemUsuariosComponent} from './usuario/listagem-usuarios/listagem-usuarios.component';
import { MantemProdutoComponent } from './produto/mantem-produto/mantem-produto.component';
import { ListagemProdutoComponent } from './produto/listagem-produto/listagem-produto.component';

const routes: Routes = [
  {
    path: 'cadastrousuario',
    component: MantemUsuarioComponent
  },
  {
    path: 'editausuario/:id',
    component: MantemUsuarioComponent
  },
  {
    path: 'listagemusuarios',
    component: ListagemUsuariosComponent
  },

  {path: 'cadastroproduto',
  component: MantemProdutoComponent
  },
  {
    path: 'listagemproduto',
    component: ListagemProdutoComponent
  },
  {
    path: 'editaproduto/:id',
    component: MantemProdutoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
