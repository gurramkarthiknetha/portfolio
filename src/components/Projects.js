import { Container, Row, Col, Tab, Nav, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/linkedin.jpeg";
import codechef from "../assets/img/codechef.jpeg";
import git from "../assets/img/git.jpeg";
import codeforces from "../assets/img/codeforces.jpeg";
import leetcode from "../assets/img/leetcode.png";
import hackerank from "../assets/img/hackerrank.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import jobby from "../assets/img1/job_files/app-phone-screen-mockup_157104-800.jpg";
import vi from "../assets/img1/vi_files/data-science-big-technology-scientist-260nw-2284126663.jpg";
import ec from "../assets/img1/ecc_files/3d-shopping-online-with-laptop-product-shipping-packing-shopping-bag-basket-credit-card-protection-with-password-secure-online-payment-concept-notebook-icon-3d-vector-render-illustration_412828-960.jpg";
import todo from "../assets/img1/todo.jpeg";
import snakegame from "../assets/img1/snake_files/2025-year-snake-modern-banner-card-with-multicolored-geometric-snake-blue-background_624052-4091.jpg";
import chart from "../assets/img1/chartbot.jpg";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const projects = [
    { title: "Github Profile", imgUrl: git, prof: "https://github.com/gurramkarthiknetha" },
    { title: "LinkedIn Profile", imgUrl: projImg1, prof: "https://www.linkedin.com/in/karthik-gurram-b7516b293/" },
    { title: "HackerRank", imgUrl: hackerank, prof: "https://www.hackerrank.com/profile/gurramkarthik201" },
    { title: "CodeChef Profile", imgUrl: codechef, prof: "https://www.codechef.com/users/karthikgurram" },
    { title: "CodeForces", imgUrl: codeforces, prof: "https://codeforces.com/profile/gurramkarthik_2" },
    { title: "LeetCode Profile", imgUrl: leetcode, prof: "https://leetcode.com/u/gurramkarthik/" }
  ];

  const GitProjects = [
    { title: "chartbot", imgUrl: chart, prof: "https://github.com/gurramkarthiknetha/chartbot" },
    { title: "Virtual health assistant app", imgUrl: vi, prof: "https://github.com/gurramkarthiknetha/VirtualHealthAssistent" },
    { title: "Ecommerce Website", imgUrl: ec, prof: "https://github.com/gurramkarthiknetha/Ecommerce-Website" },
    { title: "Todo's app", imgUrl: todo, prof: "https://github.com/gurramkarthiknetha/Todo_APP" },
    { title: "Snake Game", imgUrl: snakegame, prof: "https://github.com/gurramkarthiknetha/SnakeGame" },
    { title: "Jobby app", imgUrl: jobby, prof: "https://github.com/gurramkarthiknetha/JobbyApp" }
  ];

  const openSourceContributions = [
    { title: "NoMongo: Postgres Migration Support for Settings in orgDashboard", url: "https://github.com/PalisadoesFoundation/talawa-admin/pull/3605" },
    { title: "ADMIN & USER REDESIGN - List of events and holidays in calender view of events.", url: "https://github.com/PalisadoesFoundation/talawa-admin/pull/2676" },
    { title: "Create an equivalent sample database for importation by the setup script", url: "https://github.com/PalisadoesFoundation/talawa-api/pull/3118" },
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row className="flex flex-col items-center space-y-2" style={{ gap: "1rem", borderRadius: "2rem" }}>
                          {openSourceContributions.slice(0, 3).map((project, index) => (
                            <motion.div
                              key={index}
                              variants={cardVariants}
                              initial="hidden"
                              animate="visible"
                              className="w-full max-w-sm"
                            >
                              <Card
                                className="shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-105"
                                style={{
                                  borderRadius: "1.5rem",
                                  background: `linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)`,
                                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                                }}
                              >
                                <Card.Body className="p-2 flex flex-col items-center">
                                  <h3
                                    className="text-lg font-semibold mb-3 text-black font-italic"
                                    style={{ paddingLeft: "1rem", paddingRight: "1rem", fontSize: "2.0rem" ,fontFamily: "Centra",paddingTop: "1rem"}}
                                  >
                                    {project.title}
                                  </h3>
                                  <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-all duration-300 ease-in-out transform hover:scale-110"
                                    style={{
                                      color: "white",
                                      fontSize: "1rem",
                                      fontWeight: "600",
                                      textAlign: "center",
                                      backgroundColor: "#3B82F6",
                                      padding: "0.7rem 1.2rem",
                                      borderRadius: "0.75rem",
                                      display: "inline-block",
                                      textDecoration: "none",
                                      marginLeft: "20px",
                                      marginRight: "auto",
                                      marginTop: "1rem",
                                      marginBottom: "1rem",
                                      
                                      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                                    }}
                                  >
                                    View Source Code 🚀
                                  </a>
                                </Card.Body>
                              </Card>
                            </motion.div>
                          ))}
                        </Row>
                      </Tab.Pane>


                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            GitProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
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
