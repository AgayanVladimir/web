import React from "react";
import style from "./InformationBlock.module.css";
import InfoBlockImage from "../../assets/images/infoBlockImage.png";

export const InformationBlock = () => {
  return (
    <section className={style.informationBlock}>
      <div className={style.informationBlock__container}>
        <div className={style.informationBlock__image}>
          <img src={InfoBlockImage} alt="" />
        </div>
        <div className={style.informationBlock__info}>
          <h2 className={style.informationBlock__info_title}>
            AN <span>INTELLIGENT</span> APPROACH TO SOFTWARE DEVELOPMENT.
          </h2>
          <p className={style.informationBlock__info_firstText}>
            Airweb3 makes the art of software development hidden to our
            customers.
          </p>
          <p className={style.informationBlock__info_secondText}>
            We expose the art of software development through hiding technical
            complexities - to bring an amazing experience.
          </p>
        </div>
      </div>
    </section>
  );
};
