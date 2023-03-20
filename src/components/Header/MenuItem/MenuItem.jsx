import React from "react";
import style from "./MenuItem.module.css";

export const MenuItem = (props) => {
  return <p className={style.MenuItem}>{props.text}</p>;
};
