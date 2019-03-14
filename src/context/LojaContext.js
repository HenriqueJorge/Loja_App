import React, { Component } from 'react';
import BancoDeDados from '../bd/BancoDeDados';

// Vamos usar a nova Context API 
// 1. Primeiro a gente cria o contexto
export const LojaContext = React.createContext();
// 2. Depois a gente cria um provider
export class LojaProvider extends Component {
  state = {
    produtos: BancoDeDados.getProdutos(),
    carrinho: []
  };  

  render() {
    return (
      <LojaContext.Provider value={{
          state: this.state,
          buscar: (termo) => {
            let produtos = BancoDeDados.getProdutos().filter((p) => {
              return p.nome.toLowerCase().includes(termo.toLowerCase());
            });
            this.setState({produtos});
          },
          comprar: (produto) => {
            let carrinho = [...this.state.carrinho, produto];
            this.setState({carrinho});
          },
          remover: (indice) => {
            let carrinho = [...this.state.carrinho];
            carrinho.splice(indice, 1);
            this.setState({carrinho});
          }
      }}>
        {this.props.children}
      </LojaContext.Provider>
    );
  }
}
