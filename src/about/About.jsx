import { GitHub } from '../assets/GitHub';
import { LinkedIn } from '../assets/LinkedIn';
import { StackOverflow } from '../assets/StackOverflow';
import { EMAIL, GITHUB, LINKEDIN, MOBILE, STACK_OVERFLOW } from '../Constants';
import { ReactComponent as BgAbout } from '../assets/bg-about.svg';
import './About.scss';

export const About = () => {
  return (
    <section id="about" className="about-wrapper">
      <div className="container about-container">
        <div className="part-a">
          <div className="bg">
            <BgAbout />
          </div>
          <div className="logos">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">
              <GitHub />
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
              <LinkedIn />
            </a>
            <a href={STACK_OVERFLOW} target="_blank" rel="noopener noreferrer">
              <StackOverflow />
            </a>
          </div>
        </div>

        <div className="part-b">
          <div className="intro">
            <h1>
              Hi there,
              <br />
              I'm Ramesh
            </h1>
            <p>
              Software Engineer,
              <br />
              Front End and various other ends.
            </p>
          </div>

          <div className="contact">
            <p>
              <a className="link" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </p>
            <p>
              <a className="link" href={`tel:${MOBILE.replace(/\s/g, '')}`}>
                {MOBILE}
              </a>
            </p>
          </div>

          <div className="stack-overflow">
            <p>
              <strong>8500+</strong> reputation, <strong>400+</strong> answers
              <br />
              <strong>Top 1%</strong> Stack Overflow contributor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
