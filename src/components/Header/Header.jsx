import React, { useState } from "react";
import { headerMenuItems } from "../../assets/state";
import style from "./Header.module.css";
import { MenuItem } from "./MenuItem/MenuItem";
import logo from "../../assets/images/airweb3Logo.svg";
import { BurgerNavigation } from "./BurgerNavigation/BurgerNavigation";
import { ShowWindowDimensions } from "../ShowWindowDimensions/ShowWindowDeimensions";
import { Link, animateScroll as scroll } from "react-scroll";
export const Header = () => {
  const windowWidth = ShowWindowDimensions().props.children[1];
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <div className={style.header__logo}>
          <img src={logo} alt="" />
        </div>
        {windowWidth < 750 ? (
          <BurgerNavigation />
        ) : (
          <ul className={style.header__menu}>
            {headerMenuItems.map((menuItem, index) => {
              return (
                <li
                  className={
                    index === activeMenuItem
                      ? style.activeMenuItem
                      : style.menuItem
                  }
                  key={menuItem}
                >
                  {
                    <Link
                      onClick={() => {
                        setActiveMenuItem(index);
                      }}
                      to={menuItem.toLowerCase()}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <MenuItem text={menuItem} />
                    </Link>
                  }
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </header>
  );
};
