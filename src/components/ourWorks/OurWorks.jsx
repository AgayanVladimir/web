import React from "react";
import Swiper from "../../components/Swiper/Swiper";
import style from "./OurWorks.module.css";

export const OurWorks = () => {
  return (
    <section className={style.ourWorks}>
      <div className={style.ourWorks__container}>
        <h2 className={style.ourWorks__title}>OUR WORKS</h2>
        <Swiper />
      </div>
    </section>
  );
};
