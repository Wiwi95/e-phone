import react, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import Default from './Components/Default';
import Details from './Components/Details';
import ProductList from './Components/ProductList';
import Modal from './Components/Modal'

class App extends  Component {
  render() {
    return (
     <>
     
     <Navbar></Navbar>
     <Switch>
       <Route exact path="/" component={ProductList}/>
       <Route exact path="/details" component={Details}/>
       <Route exact path="/cart" component={Cart}/>
       <Route component={Default} />
     </Switch>
     <Modal/>
     </>
    );
  }
  
}

export default App;
