import React from "react";
import classes from "./Projects.module.css";
import { Navigation, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import SwiperCore from "swiper/core/core";
import "swiper/swiper.min.css";
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import proj6 from "../../assets/projects/airbnb2.png";
import proj5 from "../../assets/projects/b.png";
import proj4 from "../../assets/projects/ecomkeys.png";
import proj3 from "../../assets/projects/storeflow.png";
import proj2 from "../../assets/projects/hamla.png";
import proj1 from "../../assets/projects/amazon.png";
import "./styles.css";
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const Projects = (props) => {
  return (
    <div className={classes.Projects} id="projects">
      <div className="container">
        <h2>Projects</h2>
        <Swiper
          navigation={true}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          className="mySwiper">
          <SwiperSlide>
            <a href="https://jupi-burger.web.app/">
              <img src={proj1} alt="amazon-clone-site" />
            </a>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              <img src={proj2} alt="hamla startup tn" />
            </a>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              <img src={proj3} alt="storeflow theme shopify" />
            </a>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              <img src={proj4} alt="ecomkeys startup fr" />
            </a>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              <img src={proj5} alt="react app" />
            </a>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://nextjs-tailwind-airbnbdemo-f5sql1ql8-aymen-agrebi.vercel.app/">
              <img src={proj6} alt="Next tailwind app" />
            </a>{" "}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
