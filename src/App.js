import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/home";
import Admin from "./Components/Admin/Admin";
import User from "./Components/User/User";
import Profile from "./Components/Profile/ProfileUser";
import { useState } from "react";
import Auth from "./hoc/Auth";

//import Data from './Components/data/data';

function App() {
  const [isAdmin] = useState(true);

  return (
    <div className="wrapper">
      <div className="link_nav">
        <Link to={"/"}>Home</Link>
        <Link to={"/Admin_part"}>Admin Part</Link>
        <Link to={"/User_part"}>User Part</Link>
        <Link to={"/Profile"}>Profile</Link>
      </div>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route
          path={"/Admin_part"}
          element={
            <Auth>
              <Admin isAdmin={isAdmin} />
            </Auth>
          }
        ></Route>
        <Route
          path={"/User_part"}
          element={
            <Auth>
              <User isAdmin={!isAdmin} />
            </Auth>
          }
        ></Route>
        <Route
          path={"/Profile"}
          element={
            <Auth>
              <Profile />
            </Auth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
