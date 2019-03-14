import React, { Component } from 'react';
import {LojaContext} from '../context/LojaContext';

class CarrinhoDeCompras extends Component {
  renderProduto = (p, index) => {
    return (
        <tr key={'pCarrinho_' + index}>
          <td><img src={p.imagem} alt="" width="50px"/></td>
          <td>{p.nome}</td>
          <td>{p.preco.toFixed(2)}</td>
          <td>
            <LojaContext.Consumer>
              {(context) => (
                <button onClick={() => context.remover(index)} className="btn btn-danger">
                  Remover
                </button>
              )}
            </LojaContext.Consumer>
          </td>
        </tr>
    );
  }

  render() {
    return (
      <LojaContext.Consumer>
        {(context) => {
          // Calcula o total
          let total = context.state.carrinho.reduce((acc, p) => acc + p.preco, 0);

          return context.state.carrinho.length <= 0 ? "" : (
            <React.Fragment>
              <h2>Carrinho</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th>Produto</th>
                    <th>Valor</th>
                    <th>Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {context.state.carrinho.map(this.renderProduto)}
                </tbody>
                <tfoot>
                  <tr>
                    <th>&nbsp;</th>
                    <th>Total</th>
                    <th>R$ {total.toFixed(2)}</th>
                    <th>&nbsp;</th>
                  </tr>
                </tfoot>
              </table>
            </React.Fragment>
          );
        }}
      </LojaContext.Consumer>
    );
  }
}

export default CarrinhoDeCompras;