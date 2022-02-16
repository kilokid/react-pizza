import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { useDispatch } from 'react-redux';

import { setPizzas } from './redux/action/pizzas';

import { Header } from './components';
import { Home, Cart } from './pages';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/cart" element={<Cart />} exact />
        </Routes>
      </div>
    </div>
  );
};

export default App;
