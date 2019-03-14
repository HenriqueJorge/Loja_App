import React, { Component } from 'react';
import {LojaContext} from '../context/LojaContext';
import styles from './ItemProduto.css';


class ItemProduto extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-6 mb-3" style={{top: '20px'}}>
        <div className="card mb-3 shadow-sm" style={{width: '17rem'}}>
        <div className={styles.back}><div className="card-header">
            <h4 className="my-0 font-weight-normal"><h4 className={styles.font}>{this.props.produto.nome}</h4></h4>
          </div></div>
          <img src={this.props.produto.imagem} class="card-img-top" alt="Imagem do produto"></img>
          <div className="card-body" >
          </div>
          <div className={styles.back}><div className="card-header">
            <h4 className="card-title pricing-card-title"><h4 className={styles.font}> R$ {this.props.produto.preco.toFixed(2)}</h4></h4>
            <LojaContext.Consumer>
              {(context) => (
                <button type="button" className="btn-dark btn-lg btn-block " 
                  onClick={() => context.comprar(this.props.produto)}>
                  Comprar
                </button>
              )}
            </LojaContext.Consumer>
            </div></div>
        </div>
      </div>
    );
  }
}

export default ItemProduto;