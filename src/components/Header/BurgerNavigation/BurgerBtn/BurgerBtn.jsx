import React, { useState } from "react";
import style from "./BurgerBtn.module.css";

export const BurgerBtn = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      onClick={() => setMenuOpen(!menuOpen)}
      className={
        menuOpen
          ? `${style.menuBtn} ${style.open}`
          : `${style.menuBtn} ${style.close}`
      }
    >
      <span className={style.icon}></span>
      <span
        className={
          menuOpen
            ? `${style.text} ${style.openText}`
            : `${style.text} ${style.closeText}`
        }
      >
        MENU
      </span>
    </div>
  );
};
