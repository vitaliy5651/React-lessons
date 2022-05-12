import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home/home';
import React, { useReducer, useState } from 'react';
import fetchProductsReducer, { initialState } from './reducers/products.reducer';
import Admin from './Components/Admin/Admin';
import User from './Components/User/User';
import Profile from './Components/Profile/ProfileUser';

//import Data from './Components/data/data';

export const ProductContext = React.createContext()

function App() {
  
  const [products, dispatch] = useReducer(fetchProductsReducer, initialState)
  
  const [ isAdmin ] = useState(true)
  
  return (
    <ProductContext.Provider value={{productsState: products, productsDispatch: dispatch}}>
    <div className='wrapper'>
    <div className='link_nav'>
    <Link to={'/'} >Home</Link>
    <Link to={'/Admin_part'} >Admin Part</Link>
    <Link to={'/User_part'} >User Part</Link>
    <Link to={'/Profile'} >Profile</Link>
    </div>
    <Routes >
      <Route path = {'/'} element = {<Home />}></Route>
      <Route path={'/Admin_part'} element = {<Admin isAdmin = {isAdmin} />}></Route>
      <Route path = {'/User_part'} element = {<User isAdmin = {!isAdmin} />}></Route>
      <Route path={'/Profile'} element = {<Profile />}></Route>
    </Routes>
    </div>
    </ProductContext.Provider>
  );
}

export default App;
