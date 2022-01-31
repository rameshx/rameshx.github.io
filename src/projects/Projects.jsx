import { useRef } from 'react';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Projects.scss';

const PROJECTS = [
  {
    className: 'primary',
    icon: <TimerOutlinedIcon />,
    name: 'Timer',
    description:
      'A React and TypeScript timer application inspired by the timer in android clock app.',
    link: {
      github: 'https://github.com/rameshx/timer',
      live: 'https://rameshx.github.io/timer/',
    },
  },
  {
    className: 'secondary',
    icon: <BusinessCenterOutlinedIcon />,
    name: 'Portfolio',
    description:
      'This portfolio built using React, SASS (SCSS) and material icons.',
    link: {
      github: 'https://github.com/rameshx/portfolio',
      live: '#',
    },
  },
  {
    className: 'tertiary',
    icon: <FaceOutlinedIcon />,
    name: 'Face Detector',
    description:
      'A cool face detection app built using React, PostgreSQL, Clarifai API, Node.js.',
    link: {
      github: 'https://github.com/rameshx/face-detector',
      live: 'https://facerecognition-frontend-app.herokuapp.com/',
    },
  },
  {
    className: 'quaternary',
    icon: <TerrainOutlinedIcon />,
    name: 'Natours',
    description:
      'A responsive nature tours landing page built for learning SASS and advanced CSS.',
    link: {
      github: 'https://github.com/rameshx/advanced-css',
      live: 'https://rameshx.github.io/advanced-css/',
    },
  },
  {
    className: 'quinary',
    icon: <LunchDiningOutlinedIcon />,
    name: 'Burger Builder',
    description:
      'A React application that allows users to customize and order burgers.',
    link: {
      github: 'https://github.com/rameshx/burger-builder',
      live: 'https://react-burger-builder-d0989.firebaseapp.com/',
    },
  },
];

const Project = ({
  className,
  icon,
  description,
  name,
  link: { live, github },
}) => {
  return (
    <div className={`project ${className}`}>
      <span className="icon-wrapper">{icon}</span>
      <div className="body">
        <p className="description">{description}</p>
        <hr />
        <h5 className="name">{name}</h5>
        <p>
          <a
            className="link"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          &nbsp;|&nbsp;
          <a
            className="link"
            href={live}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>
        </p>
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
          {PROJECTS.map((project) => (
            <SwiperSlide key={project.name}>
              <Project {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="projects-navigation">
          <button
            className="fab"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <ArrowBackOutlinedIcon />
          </button>
          <button
            className="fab"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <ArrowForwardOutlinedIcon />
          </button>
        </div>
      </div>
    </section>
  );
};
