import { useEffect, useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Ramesh } from '../assets/Ramesh';
import './Header.scss';

const setupHeader = () => {
  const body = document.body;
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      body.classList.remove('scroll-up');
      return;
    }

    if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
      body.classList.remove('scroll-up');
      body.classList.add('scroll-down');
    } else if (
      currentScroll < lastScroll &&
      body.classList.contains('scroll-down')
    ) {
      body.classList.remove('scroll-down');
      body.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
  });
};

export const Header = () => {
  useEffect(setupHeader, []);

  const [isMobileNavOpen, setMobileNav] = useState(false);

  return (
    <header className={`header${isMobileNavOpen ? ' mobile-nav-visible' : ''}`}>
      <div className="container">
        <Ramesh />

        <nav className="nav">
          <ul className="nav-list">
            <li className="list-item">
              <a href="#about" className="link-primary">
                ABOUT
              </a>
            </li>
            <li className="list-item">
              <a href="#skills" className="link-primary">
                SKILLS
              </a>
            </li>
            <li className="list-item">
              <a href="#experience" className="link-primary">
                EXPERIENCE
              </a>
            </li>
            <li className="list-item">
              <a href="#projects" className="link-primary">
                PROJECTS
              </a>
            </li>
          </ul>
        </nav>

        <a href="#contact" className="link-primary link-contact">
          CONTACT
        </a>

        <button className="fab mobile-nav-toggle" onClick={() => setMobileNav((prev) => !prev)}>
          {isMobileNavOpen ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
        </button>
      </div>
    </header>
  );
};
