import React from "react";
import style from "./OurServices.module.css";
import credit from "../../assets/images/creditCard.png";
import programming from "../../assets/images/programmingInterface.png";
import videoGame from "../../assets/images/videoGame.png";
import amico from "../../assets/images/amico.png";

export const OurServices = () => {
  return (
    <section id="services" className={style.ourServices}>
      <div className={style.ourServices__container}>
        <h2 className={style.ourServices__title}>OUR SERVICES</h2>
        <div className={style.ourServices__body}>
          <img className={style.ourServices__body_item} src={credit} alt="" />
          <img
            className={style.ourServices__body_item}
            src={programming}
            alt=""
          />
          <img
            className={style.ourServices__body_item}
            src={videoGame}
            alt=""
          />
          <img className={style.ourServices__body_item} src={amico} alt="" />
        </div>
      </div>
    </section>
  );
};
