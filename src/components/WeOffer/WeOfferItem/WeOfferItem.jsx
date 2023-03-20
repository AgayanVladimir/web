import React from "react";
import style from "./WeOfferItem.module.css";

export const WeOfferItem = (props) => {
  return (
    <div className={style.weOfferItem}>
      <div className={style.weOfferItem__image}>
        <img src={props.image} alt="" />
      </div>
      <p className={style.weOfferItem__title}>{props.title}</p>
      <p className={style.weOfferItem__text}>{props.text}</p>
    </div>
  );
};
