import { useRef } from 'react';

import Fab from '@mui/material/Fab';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './Projects.scss';

const Project = () => {
  return (
    <div className="project">
      <span className="icon-wrapper">
        <TimerOutlinedIcon />
      </span>
      <div className="body">
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quae
          odit eius explicabo quibusdam sapiente. Dolorum reprehenderit illo,
          aliquid eveniet laborum.
        </p>
        <hr />
        <h5 className="name">React Timer</h5>
      </div>
    </div>
  );
};

export const Projects = () => {
  const swiperRef = useRef(null);

  return (
    <section className="projects-container">
      <div className="projects">
        <h2>My Projects</h2>
        <Swiper
          ref={swiperRef}
          centeredSlides
          grabCursor
          slidesPerView={'auto'}
          spaceBetween={16}
        >
          <SwiperSlide>
            <Project />
          </SwiperSlide>
          <SwiperSlide>
            <Project />
          </SwiperSlide>
          <SwiperSlide>
            <Project />
          </SwiperSlide>
          <SwiperSlide>
            <Project />
          </SwiperSlide>
          <SwiperSlide>
            <Project />
          </SwiperSlide>
        </Swiper>
        <div className="projects-navigation">
          <Fab
            color="primary"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <ArrowBackOutlinedIcon />
          </Fab>
          <Fab
            color="secondary"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <ArrowForwardOutlinedIcon />
          </Fab>
        </div>
      </div>
    </section>
  );
};
