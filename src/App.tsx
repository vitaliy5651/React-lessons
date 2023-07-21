import React from 'react';
import styles from './App.css'
import Home from './Components/Home/home';
import Admin from './Components/Admin/Admin';
import User from './Components/User/User';
import Profile from './Components/Profile/ProfileUser';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import RoleAdmin from './Components/hoc/RoleAdmin';
import RoleUser from './Components/hoc/RoleUser';
import Cart from './Components/Cart/Cart';

function App() {


  const [ isAdmin ] = useState(true)


  return (
    <div className='wrapper' style={styles}>
    <input type="checkbox" id="nav-toggle" hidden></input>
    <div className='link_nav'>
    <label htmlFor='nav-toggle' className="nav-toggle"></label>
    <h2 className='Logo'>Iphone store</h2>
    <ul>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to={'/Admin_part'}>Admin Part</Link></li>
    <li><Link to={'/User_part'}>User Part</Link></li>
    <li><Link to={'/Profile'}>Profile</Link></li>
    <li><Link to = {'/Cart'}>Cart</Link></li>
    </ul>
    </div>
    <Routes >
      <Route path = {'/'} element = {<Home />}></Route>
      <Route path={'/Admin_part'} element = { 
      <RoleAdmin>
        <Admin isAdmin = {isAdmin} />
        </RoleAdmin>
      }>
      </Route>
      <Route path = {'/User_part'} element = {
        <RoleUser>
      <User isAdmin = {!isAdmin} />
      </RoleUser>
      }>
      </Route>
      <Route path={'/Profile'} element = {
        <RoleUser>
      <Profile />
      </RoleUser>
      }></Route>
      <Route path = {'/Cart'} element = {
        <RoleUser>
          <Cart />
        </RoleUser>
      }></Route>
    </Routes>
    </div>
  );
}

export default App;
