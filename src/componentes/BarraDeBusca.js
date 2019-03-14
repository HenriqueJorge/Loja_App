import React, { Component } from 'react';
import {LojaContext} from '../context/LojaContext';

class BarraDeBusca extends Component {    
  render() {
    return (
        <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="#"><h3>Store</h3></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
            </ul>
            <form className="form-inline mt-2 mt-md-0">
              <LojaContext.Consumer>
                {(context) => (
                  <input className="form-control mr-sm-2" type="text" 
                    placeholder="Procurar" aria-label="Search" 
                    onChange={(event) => context.buscar(event.target.value)}/>
                )}
              </LojaContext.Consumer>
            </form>
          </div>
        </nav>
      </header>
    );
  }
}

export default BarraDeBusca;