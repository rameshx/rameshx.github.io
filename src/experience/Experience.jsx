import "./Experience.scss";

export const Experience = () => {
  return (
    <section id="experience" className="experience-container">
      <div className="container experience">
        <h2>My Work Experience</h2>
        <div className="timeline">
          <ul>
            <li className="timeline-item time primary">
              <h5>Rep Connect | Reputation, Hyderabad</h5>
              <p>
                <time>NOVEMBER 2020 - JUNE 2022</time>
              </p>
            </li>
            <li className="timeline-item description primary">
              <h5>Software Engineer - Frontend</h5>
              <p>
                Developed various React components for the front-end of Rep
                Connect Module, including a complex multi-step self-serve
                wizard. Added Node.js APIs, React hooks for reusability, etc.
              </p>
            </li>
            <li className="timeline-item time secondary">
              <h5>Domino Data Lab | Zessta, Hyderabad</h5>
              <p>
                <time>JULY 2020 - NOVEMBER 2020</time>
              </p>
            </li>
            <li className="timeline-item description secondary">
              <h5>Frontend Engineer</h5>
              <p>
                Developed the Workspaces and Git-based projects sections of
                Domino's MLOps platform. Revamped the UI/UX of these sections to
                increase the performance and made them more convenient for the
                data scientists to use.
              </p>
            </li>
            <li className="timeline-item time tertiary">
              <h5>Arealytics | Zessta, Hyderabad</h5>
              <p>
                <time>MAY 2019 - JULY 2020</time>
              </p>
            </li>
            <li className="timeline-item description tertiary">
              <h5>Full Stack Engineer</h5>
              <p>
                Developed an angular app for allowing the professional services
                team to build HTML templates using drag and drop. Built a web
                component using Angular Elements that displays Arealytics data.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
