import React, { Component } from 'react';
import {LojaContext} from '../context/LojaContext';
import ItemProduto from './ItemProduto';

const PRODUTOS_POR_LINHA = 4;

class ListaDeProdutos extends Component {
  renderProduto = (linha) => {
    return (
      <div class="row">
        {linha.map((p) => (
          <ItemProduto produto={p} />
        ))}
      </div>
    );
  }
  
  render() {
    return (
      <LojaContext.Consumer>
        {(context) => {
          let linhas = [];

          for (let i = 0; i < context.state.produtos.length; i += PRODUTOS_POR_LINHA) {
            linhas.push(context.state.produtos.slice(i, i + PRODUTOS_POR_LINHA));
          }

          return linhas.map(this.renderProduto);
        }}
      </LojaContext.Consumer>
    );
  }
}

export default ListaDeProdutos;