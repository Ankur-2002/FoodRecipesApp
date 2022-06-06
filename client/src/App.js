import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Dashboard from './component/Dashboard/Dashboard';
import Account from './component/Account/Account';
import Recipe from '../src/component/Recipe/Recipe';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchUserRecipe } from './store/Action/Recipe';
function App() {
  const state = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.token) {
      dispatch(
        fetchUserRecipe({
          id: state.id,
        })
      );
    }
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Dashboard />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/recipe/:id" element={<Recipe />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
