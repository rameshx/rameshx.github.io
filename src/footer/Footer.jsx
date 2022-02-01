import { Ramesh } from '../assets/Ramesh';
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
            <a className="link" href="mailto:rameshreddyx@gmail.com">
              saying hi
            </a>
          </h3>
          <div className="links">
            <h5>Find me on</h5>
            <ul>
              <li>
                <a
                  className="link-primary"
                  href="mailto:rameshreddyx@gmail.com"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  className="link-primary"
                  href="https://wa.me/917013608340"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Whatsapp
                </a>
              </li>
              <li>
                <a
                  className="link-primary"
                  href="https://www.linkedin.com/in/rameshreddyp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="link-primary"
                  href="https://stackoverflow.com/users/9765167/ramesh-reddy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stack Overflow
                </a>
              </li>
              <li>
                <a
                  className="link-primary"
                  href="https://github.com/rameshx"
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
          <Ramesh />
          <p>© 2022</p>
        </div>
      </div>
    </footer>
  );
};
