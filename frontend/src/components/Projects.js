import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { motion } from "framer-motion";
import projImg1 from "../assets/img/linkedin.jpeg";
import codechef from "../assets/img/codechef.jpeg";
import git from "../assets/img/git.jpeg";
import Bandiwala from "../assets/img1/bandi.jpeg"
import codeforces from "../assets/img/codeforces.jpeg";
import leetcode from "../assets/img/leetcode.png";
import hackerank from "../assets/img/hackerrank.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import jobby from "../assets/img1/jobby.jpeg";
import vi from "../assets/img1/vi.jpeg";
import ec from "../assets/img1/ecomm.webp";
import todo from "../assets/img1/todo.jpeg";
import snakegame from "../assets/img1/snake.jpeg";


import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {



  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const projects = [
    { title: "Github Profile", imgUrl: git, prof: "https://github.com/gurramkarthiknetha" },
    { title: "LinkedIn Profile", imgUrl: projImg1, prof: "https://www.linkedin.com/in/karthik-gurram-b7516b293/" },
    { title: "HackerRank", imgUrl: hackerank, prof: "https://www.hackerrank.com/profile/gurramkarthik201" },
    { title: "CodeChef Profile", imgUrl: codechef, prof: "https://www.codechef.com/users/gurramkarthik" },
    { title: "CodeForces", imgUrl: codeforces, prof: "https://codeforces.com/profile/gurramkarthik_2" },
    { title: "LeetCode Profile", imgUrl: leetcode, prof: "https://leetcode.com/u/gurramkarthik/" }
  ];

  const GitProjects = [
    { title: "Food ordering real time app + web (intern) ", imgUrl: Bandiwala, prof: "https://github.com/gurramkarthiknetha/bandiwala-MonoRepo" },
    { title: "Virtual health assistant app", imgUrl: vi, prof: "https://github.com/gurramkarthiknetha/VirtualHealthAssistent" },
    { title: "Ecommerce Website", imgUrl: ec, prof: "https://github.com/gurramkarthiknetha/Ecommerce-Website" },
    { title: "Todo's app", imgUrl: todo, prof: "https://github.com/gurramkarthiknetha/Todo_APP" },
    { title: "Snake Game", imgUrl: snakegame, prof: "https://github.com/gurramkarthiknetha/SnakeGame" },
    { title: "AI Powered Study Buddy", imgUrl: jobby, prof: "https://github.com/gurramkarthiknetha/AI-Powered-Study-Buddy-Mono-repo" }
  ];

  const openSourceContributions = [
    { title: "NoMongo: Postgres Migration Support for Settings in orgDashboard", url: "https://github.com/PalisadoesFoundation/talawa-admin/pull/3605" },
    { title: "ADMIN & USER REDESIGN - List of events and holidays in calender view of events.", url: "https://github.com/PalisadoesFoundation/talawa-admin/pull/2676" },
    { title: "Create an equivalent sample database for importation by the setup script", url: "https://github.com/PalisadoesFoundation/talawa-api/pull/3118" },
    {
      title: "Fixed Tag Component Display", 
      url:"https://github.com/PalisadoesFoundation/talawa-admin/pull/3918"
    },
    {
      title: "Figma redesign for the Talawa app",
      url: "https://github.com/PalisadoesFoundation/talawa-admin/pull/3406"
    },{
      title: "Refactor Profile Settings UI to Align with Figma Style Guide & Consolidate CSS",
      url: "https://github.com/PalisadoesFoundation/talawa-admin/pull/3843"
    }
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 data-aos="fade-up">Projects & Open Source Work</h2>
                  <p data-aos="fade-up" data-aos-delay="100">
                    Passionate about problem-solving and software development, I actively work on projects that showcase my skills in data structures, algorithms, and real-world applications. My contributions to open-source communities reflect my commitment to collaborative coding, learning, and innovation. From building efficient software solutions to refining existing codebases, I strive to write clean, maintainable, and impactful code. Whether it’s personal projects, open-source contributions, or competitive programming, I am always exploring new challenges to enhance my technical expertise and make meaningful contributions to the developer community.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item style={{ hover: "cursor: pointer" }}>
                        <Nav.Link eventKey="first">Profiles</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Open source contributions</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <motion.div
                          className="timeline-container"
                          variants={timelineVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {projects.map((project, index) => (
                            <motion.div
                              key={index}
                              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                              variants={itemVariants}
                            >
                              <div className="timeline-content">
                                <img src={project.imgUrl} alt={project.title} loading="lazy" />
                                <h4>{project.title}</h4>
                                <a href={project.prof} target="_blank" rel="noopener noreferrer" className="timeline-link">
                                  View Profile
                                </a>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <motion.div
                          className="timeline-container"
                          variants={timelineVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {openSourceContributions.map((contribution, index) => (
                            <motion.div
                              key={index}
                              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                              variants={itemVariants}
                            >
                              <div className="timeline-content contribution">
                                <h4>{contribution.title}</h4>
                                <a href={contribution.url} target="_blank" rel="noopener noreferrer" className="timeline-link">
                                  View Contribution
                                </a>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <motion.div
                          className="timeline-container"
                          variants={timelineVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {GitProjects.map((project, index) => (
                            <motion.div
                              key={index}
                              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                              variants={itemVariants}
                            >
                              <div className="timeline-content">
                                <img src={project.imgUrl} alt={project.title} loading="lazy" />
                                <h4>{project.title}</h4>
                                <a href={project.prof} target="_blank" rel="noopener noreferrer" className="timeline-link">
                                  View Project
                                </a>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  )
}
