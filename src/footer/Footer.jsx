import { Ramesh } from '../assets/Ramesh';
import { EMAIL, GITHUB, LINKEDIN, STACK_OVERFLOW, WHATSAPP } from '../Constants';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="contact">
          <h2>
            Get in touch
            <br />
            with me.
          </h2>
          <h3>
            Start by{' '}
            <a className="link" href={`mailto:${EMAIL}`}>
              saying hi
            </a>
          </h3>
          <div className="links">
            <h5>Find me on</h5>
            <ul>
              <li>
                <a
                  className="link-primary"
                  href={`mailto:${EMAIL}`}
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  className="link-primary"
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Whatsapp
                </a>
              </li>
              <li>
                <a
                  className="link-primary"
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="link-primary"
                  href={STACK_OVERFLOW}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stack Overflow
                </a>
              </li>
              <li>
                <a
                  className="link-primary"
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="copyright">
          <a href="#about"><Ramesh /></a>
          <p>© 2022</p>
        </div>
      </div>
    </footer>
  );
};
