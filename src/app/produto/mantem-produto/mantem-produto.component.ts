import { Component } from '@angular/core';
import { PRODUTOS } from 'src/app/shared/modelo/PRODUTOS';
import { Produto } from 'src/app/shared/modelo/produto';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-mantem-produto',
  templateUrl: './mantem-produto.component.html',
  styleUrls: ['./mantem-produto.component.css']
})
export class MantemProdutoComponent {

  usuarioDeManutencao: Produto;
  estahCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar';

  usuarios = PRODUTOS;
  constructor(private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.usuarioDeManutencao = new Produto('', '', 0);
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    if (idParaEdicao) {
      // editando
      const usuarioEncontrado = this.usuarios.find(
        usuario => usuario.nome === idParaEdicao);
      if (usuarioEncontrado) {
        this.estahCadastrando = false;
        this.nomeBotaoManutencao = 'Salvar';
        this.usuarioDeManutencao = usuarioEncontrado;
      }
    } else {
      this.nomeBotaoManutencao = 'Cadastrar';
    }
  }

  manter(): void {
    if (this.estahCadastrando && this.usuarioDeManutencao) {
      this.usuarios.push(this.usuarioDeManutencao);
    }
    this.usuarioDeManutencao = new Produto();
    this.nomeBotaoManutencao = 'Cadastrar';
    this.roteador.navigate(['listagemproduto']);
  }

}
