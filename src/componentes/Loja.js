import React, { Component } from 'react';
import {LojaProvider} from '../context/LojaContext';
import BarraDeBusca from './BarraDeBusca';
import ListaDeProdutos from './ListaDeProdutos';
import CarrinhoDeCompras from './CarrinhoDeCompras';

class Loja extends Component {
  render() {
    return (
      <LojaProvider>
        <div>
          <BarraDeBusca/>
          <div class="container">
            <ListaDeProdutos/>
            <hr/>
            <CarrinhoDeCompras/>
          </div>
        </div>
      </LojaProvider>
    );
  }
}

export default Loja;