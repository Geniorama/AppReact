import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/App.css';
import BarNav from './components/Navigation';
import MenuLateral from './components/Menu-lateral';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="bg-dark text-light p-3">
          <BarNav/>
        </header>
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-md-3 ml-0 pl-0">
              <MenuLateral/>
            </div>
            <div class="col-12 col-md-8">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas temporibus mollitia doloremque laboriosam numquam aperiam impedit at sint, recusandae voluptatum iste dolorem deserunt eum nobis minima, possimus ut veritatis magnam!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
