import React from 'react';
import classes from './Projects.module.css';
import { Navigation, Pagination ,EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore from 'swiper/core/core';
import 'swiper/swiper.min.css';
import 'swiper/modules/effect-coverflow/effect-coverflow.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import proj1 from '../../assets/projects/burger1.png';
import proj2 from '../../assets/projects/ecomkeys.png';
import proj3 from '../../assets/projects/burger.png';
import './styles.css'
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
                        slideShadows: true
                    }}
                    pagination={{clickable: true}}
                    className= 'mySwiper'
                >

                    <SwiperSlide><a href="https://jupi-burger.web.app/"><img src={proj1} alt="1" /></a> </SwiperSlide>
                    <SwiperSlide><a href=""><img src={proj3} alt="1" /></a> </SwiperSlide>
                    <SwiperSlide><a href=""><img src={proj2} alt="1" /></a> </SwiperSlide>
                    <SwiperSlide><a href=""><img src={proj1} alt="1" /></a> </SwiperSlide>
                    <SwiperSlide><a href=""><img src={proj1} alt="1" /></a> </SwiperSlide>
                 
                </Swiper>
            </div>

        </div>
    );
}

export default Projects;
