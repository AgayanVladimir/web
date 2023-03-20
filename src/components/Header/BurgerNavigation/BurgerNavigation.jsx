import React from "react";
import { headerMenuItems } from "../../../assets/state";
import { BurgerBtn } from "./BurgerBtn/BurgerBtn";
import style from "./BurgerNavigation.module.css";

export const BurgerNavigation = () => {
  return (
    <div className={style.burgerNavigation}>
      <BurgerBtn />
      {/* <div className={style.burgerNavigation__menu}>
        <ul>
          {headerMenuItems.map((item) => {
            return (
              <li className={style.burgerNavigation__menu_item}>{item}</li>
            );
          })}
        </ul>
      </div> */}
    </div>
  );
};
