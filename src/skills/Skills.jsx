import MonitorOutlinedIcon from "@mui/icons-material/MonitorOutlined";
import RoomPreferencesOutlinedIcon from "@mui/icons-material/RoomPreferencesOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import "./Skills.scss";

const SKILLS = [
  {
    tab: {
      icon: <MonitorOutlinedIcon />,
      title: "Frontend",
      subtitle: "React, Angular, Redux, TypeScript, JavaScript (ES6+), HTML5, CSS3, SASS (SCSS), Webpack, Handlebars",
      className: "primary",
    },
  },
  {
    tab: {
      icon: <RoomPreferencesOutlinedIcon />,
      title: "Backend",
      subtitle: "Node.js, Express.js, GraphQL, RESTful APIs",
      className: "secondary",
    },
  },
  {
    tab: {
      icon: <StorageOutlinedIcon />,
      title: "Database",
      subtitle: "MongoDB, PostgreSQL, MySQL",
      className: "tertiary",
    },
  },
  {
    tab: {
      icon: <BugReportOutlinedIcon />,
      title: "Testing",
      subtitle: "Jest, Enzyme, Mocha, React Testing Library",
      className: "quaternary",
    },
  },
  {
    tab: {
      icon: <AccountTreeOutlinedIcon />,
      title: "Other",
      subtitle: "Git, Docker, Data Structures, Algorithms",
      className: "quinary",
    },
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <div className="container skills">
        <h2>My Skills</h2>
        <div className="tabs">
          {SKILLS.map(({ tab }) => (
            <div key={tab.title} className={`tab ${tab.className}`}>
              <div className="icon-wrapper">{tab.icon}</div>
              <div className="text-wrapper">
                <h5>{tab.title}</h5>
                <p>{tab.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
