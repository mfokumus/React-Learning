import React from "react";
import "../styles/Menu.css";
import { Data } from "../data/Data";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">SİZE ÖZEL BURGERLERİMİZ</h1>
      <div className="menuList">
        {Data.map((menuItem, index) => {
          return (
            <MenuItem
              image={menuItem.image}
              name={menuItem.name}
              content={menuItem.content}
              price={menuItem.price}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
