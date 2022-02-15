import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import store from './redux/store';
import { connect } from 'react-redux';
import { setPizzas as setPizzasAction } from './redux/action/pizzas';

import { Header } from './components';
import { Home, Cart } from './pages';

const App = (props) => {
  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      props.setPizzas(data.pizzas);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home items={props.items} />} exact />
          <Route path="/cart" element={<Cart />} exact />
        </Routes>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
