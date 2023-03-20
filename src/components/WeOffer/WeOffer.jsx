import React from "react";
import { whatCanWeOffer } from "../../assets/state";
import style from "./WeOffer.module.css";
import { WeOfferItem } from "./WeOfferItem/WeOfferItem";

export const WeOffer = () => {
  return (
    <section className={style.weOffer}>
      <div className={style.weOffer__container}>
        <h2 className={style.weOffer__title}>WHAT CAN WE OFFER?</h2>
        <div className={style.weOffer__body}>
          {whatCanWeOffer.map((item, index) => {
            return (
              <div style={index % 2 !== 0 ? { marginTop: 120 + "px" } : {}}>
                <WeOfferItem
                  image={item.image}
                  title={item.title}
                  text={item.text}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
