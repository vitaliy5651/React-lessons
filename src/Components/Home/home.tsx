import React from "react";
import { useAppSelector } from "../../hooks";
import Switcher from "../Switcher";
import home from "./home.css";

const Home = () => {
  const profile = useAppSelector((state) => state.ProfileReducer)
  return (
    <div className="Home" style={home}>
      <Switcher />
      <div className="Role">Вы вошли как: {profile.role}</div>
      <div className="home_title">
        Здарова!!! Страница создана для того чтобы ты смог(ла) полюбоваться на
        картинки красивых Iphone, на которые у тебя нет денег :)
      </div>
      <div className="home_img">
        <img
          alt="img"
          className="img"
          src={
            "https://images.macrumors.com/t/I3UxQHvDSVyqt5FR4qiWg3vxHuY=/1600x0/filters:quality(90)/article-new/2020/07/iphone-12-compared-c.jpg"
          }
        />
      </div>
      <div className="home_description">
        Сверху ты можешь посмотреть на примерные модели ну или по крайней мере
        увидеть как повышаются размеры этого пластика и при этом цена взлетает
        до небес) Наслаждайся:)
      </div>
    </div>
  );
};

export default Home;
