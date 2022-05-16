import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home/home';
import Admin from './Components/Admin/Admin';
import User from './Components/User/User';
import Profile from './Components/Profile/ProfileUser';
import { useState } from 'react';

//import Data from './Components/data/data';

function App() {


  const [ isAdmin ] = useState(true)


  return (
    <div className='wrapper'>
    <input type="checkbox" id="nav-toggle" hidden></input>
    <div className='link_nav'>
    <label htmlFor='nav-toggle' className="nav-toggle"></label>
    <h2 className='Logo'>Iphone store</h2>
    <ul>
    <li><Link to={'/'} >Home</Link></li>
    <li><Link to={'/Admin_part'} >Admin Part</Link></li>
    <li><Link to={'/User_part'} >User Part</Link></li>
    <li><Link to={'/Profile'} >Profile</Link></li>
    </ul>
    </div>
    <Routes >
      <Route path = {'/'} element = {<Home />}></Route>
      <Route path={'/Admin_part'} element = {<Admin isAdmin = {isAdmin} />}></Route>
      <Route path = {'/User_part'} element = {<User isAdmin = {!isAdmin} />}></Route>
      <Route path={'/Profile'} element = {<Profile />}></Route>
    </Routes>
    </div>
  );
}

export default App;
