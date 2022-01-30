import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./Projects.scss";

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
          aliquid eveniet laborum autem fugiat amet veritatis rem incidunt
          quisquam, numquam laudantium.
        </p>
        <hr />
        <h5 className="name">React Timer</h5>
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <section className="projects-container">
      <div className="projects">
        <h2>My Projects</h2>
        <Swiper centeredSlides slidesPerView={'auto'} spaceBetween={16}>
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
      </div>
    </section>
  );
};
