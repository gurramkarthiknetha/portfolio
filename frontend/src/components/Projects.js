import { Container, Row, Col } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp2 from "../assets/img/color-sharp2.png";

// Import your project images
import projImg1 from "../assets/img/linkedin.jpeg";
import codechef from "../assets/img/codechef.jpeg";
import git from "../assets/img/git.jpeg";
import codeforces from "../assets/img/codeforces.jpeg";
import leetcode from "../assets/img/leetcode.png";
import hackerank from "../assets/img/hackerrank.png";
import jobby from "../assets/img1/job_files/app-phone-screen-mockup_157104-800.jpg";
import vi from "../assets/img1/vi_files/data-science-big-technology-scientist-260nw-2284126663.jpg";
import ec from "../assets/img1/ecc_files/3d-shopping-online-with-laptop-product-shipping-packing-shopping-bag-basket-credit-card-protection-with-password-secure-online-payment-concept-notebook-icon-3d-vector-render-illustration_412828-960.jpg";
import todo from "../assets/img1/todo.jpeg";
import snakegame from "../assets/img1/snake_files/2025-year-snake-modern-banner-card-with-multicolored-geometric-snake-blue-background_624052-4091.jpg";
import chart from "../assets/img1/chartbot.jpg";

export const Projects = () => {
  const [activeSection, setActiveSection] = useState('personal-projects');
  const [nodes, setNodes] = useState([]);
  const [pulseScale, setPulseScale] = useState(1);
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);

  const profiles = [
    { title: "Github Profile", imgUrl: git, prof: "https://github.com/gurramkarthiknetha", period: "2020 - Present" },
    { title: "LinkedIn Profile", imgUrl: projImg1, prof: "https://www.linkedin.com/in/karthik-gurram-b7516b293/", period: "2021 - Present" },
    { title: "HackerRank", imgUrl: hackerank, prof: "https://www.hackerrank.com/profile/gurramkarthik201", period: "2020 - 2023" },
    { title: "CodeChef Profile", imgUrl: codechef, prof: "https://www.codechef.com/users/gurramkarthik", period: "2021 - Present" },
    { title: "CodeForces", imgUrl: codeforces, prof: "https://codeforces.com/profile/gurramkarthik_2", period: "2022 - Present" },
    { title: "LeetCode Profile", imgUrl: leetcode, prof: "https://leetcode.com/u/gurramkarthik/", period: "2021 - Present" }
  ];

  const gitProjects = [
    { 
      title: "Chartbot", 
      imgUrl: chart, 
      prof: "https://github.com/gurramkarthiknetha/chartbot",
      description: "An interactive chatbot with data visualization features",
      period: "Jan 2024 - Mar 2024"
    },
    { 
      title: "Virtual Health Assistant App", 
      imgUrl: vi, 
      prof: "https://github.com/gurramkarthiknetha/VirtualHealthAssistent",
      description: "AI-powered virtual health assistant for remote patient care",
      period: "Oct 2023 - Dec 2023"
    },
    { 
      title: "Ecommerce Website", 
      imgUrl: ec, 
      prof: "https://github.com/gurramkarthiknetha/Ecommerce-Website",
      description: "Full-featured ecommerce platform with payment integration",
      period: "Jul 2023 - Sep 2023"
    },
    { 
      title: "Todo App", 
      imgUrl: todo, 
      prof: "https://github.com/gurramkarthiknetha/Todo_APP",
      description: "Task management application with priority scheduling",
      period: "Apr 2023 - Jun 2023"
    },
    { 
      title: "Snake Game", 
      imgUrl: snakegame, 
      prof: "https://github.com/gurramkarthiknetha/SnakeGame",
      description: "Classic snake game with modern UI and features",
      period: "Feb 2023 - Mar 2023"
    },
    { 
      title: "Jobby App", 
      imgUrl: jobby, 
      prof: "https://github.com/gurramkarthiknetha/JobbyApp",
      description: "Job search platform with advanced filtering options",
      period: "Nov 2022 - Jan 2023"
    }
  ];

  const openSourceContributions = [
    { 
      title: "NoMongo: Postgres Migration Support", 
      url: "https://github.com/PalisadoesFoundation/talawa-admin/pull/3605",
      description: "Added Postgres migration support for settings in orgDashboard",
      period: "Dec 2023 - Feb 2024"
    },
    { 
      title: "Admin & User Redesign", 
      url: "https://github.com/PalisadoesFoundation/talawa-admin/pull/2676",
      description: "Implemented calendar view for events and holidays listings",
      period: "Aug 2023 - Oct 2023"
    },
    { 
      title: "Database Sample Creation", 
      url: "https://github.com/PalisadoesFoundation/talawa-api/pull/3118",
      description: "Created equivalent sample database for setup script importation",
      period: "May 2023 - Jul 2023"
    },
  ];

  const timelineContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const timelineItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef);

  useEffect(() => {
    const timelineLinks = document.querySelectorAll('#timeline-nav a');
    
    const handleTimelineClick = (e) => {
      e.preventDefault();
      timelineLinks.forEach(l => l.classList.remove('active'));
      e.target.classList.add('active');
      
      const targetId = e.target.getAttribute('href').substring(1);
      setActiveSection(targetId);
    };

    timelineLinks.forEach(link => {
      link.addEventListener('click', handleTimelineClick);
    });

    return () => {
      timelineLinks.forEach(link => {
        link.removeEventListener('click', handleTimelineClick);
      });
    };
  }, []);

  useEffect(() => {
    const animateOnScroll = () => {
      const timelineItems = document.querySelectorAll('.timeline-item');
      timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const itemBottom = item.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        if (itemTop < windowHeight - 100 && itemBottom > 0) {
          item.classList.add('in-view');
        }
      });
    };

    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  // Pulsing effect for nodes
  useEffect(() => {
    const pulseTick = setInterval(() => {
      setPulseScale(prev => prev === 1 ? 1.2 : 1);
    }, 1500);
    
    return () => clearInterval(pulseTick);
  }, []);

  useEffect(() => {
    // Get full document height for node distribution
    const getDocumentHeight = () => Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    const createNodes = () => {
      const newNodes = [];
      const docHeight = getDocumentHeight();
      
      // Increased number of nodes for full coverage
      for (let i = 0; i < 300; i++) {
        newNodes.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * docHeight, // Use full document height
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 3 + 2,
          opacity: Math.random() * 0.5 + 0.5
        });
      }
      setNodes(newNodes);
    };

    createNodes();
    
    // Adjust nodes when window resizes
    const handleResize = () => {
      createNodes(); // Recreate nodes when window size changes
    };
    
    window.addEventListener('resize', handleResize);
    
    const interval = setInterval(() => {
      const docHeight = getDocumentHeight();
      
      setNodes(prevNodes => {
        return prevNodes.map(node => {
          let newX = node.x + node.vx;
          let newY = node.y + node.vy;
          
          // Boundary check with wraparound
          if (newX < 0) newX = window.innerWidth;
          if (newX > window.innerWidth) newX = 0;
          if (newY < 0) newY = docHeight;
          if (newY > docHeight) newY = 0;
          
          return {
            ...node,
            x: newX,
            y: newY
          };
        });
      });
    }, 25); // Faster updates for smoother animation

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const getDocumentHeight = () => Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
    
    const resizeCanvas = () => {
      const scale = window.devicePixelRatio;
      const docHeight = getDocumentHeight();
      
      canvas.width = window.innerWidth * scale;
      canvas.height = docHeight * scale; // Use full document height
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = docHeight + 'px'; // Use full document height
      ctx.scale(scale, scale);
    };
    
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('load', resizeCanvas);
    
    // Initial resize
    resizeCanvas();
    
    // Handle scroll events to keep canvas positioned correctly
    const handleScroll = () => {
      // For fixed position canvas, no transform needed
      // Just ensure we're rendering the visible area
      requestAnimationFrame(render);
    };
    
    window.addEventListener('scroll', handleScroll);

    // Main render function
    const render = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const viewportHeight = window.innerHeight;
      
      // Clear only the visible area for performance
      ctx.clearRect(0, scrollY, canvas.width, viewportHeight);
      
      // Filter nodes to only process those in visible area (with some margin)
      const visibleNodes = nodes.filter(node => 
        node.y > scrollY - 200 && node.y < scrollY + viewportHeight + 200
      );
      
      // Draw connections
      visibleNodes.forEach((node1, i) => {
        visibleNodes.forEach((node2, j) => {
          if (i === j) return;
          const dx = node2.x - node1.x;
          const dy = node2.y - node1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 180) {
            ctx.beginPath();
            ctx.moveTo(node1.x, node1.y);
            ctx.lineTo(node2.x, node2.y);
            // Gradient opacity based on distance
            const opacity = 1 - distance / 180;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.4})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        });
      });

      // Draw nodes with glow effect
      visibleNodes.forEach(node => {
        // Add glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.7)';
        
        // Bright white nodes with full opacity
        ctx.fillStyle = `rgba(255, 255, 255, ${node.opacity})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * pulseScale, 0, Math.PI * 2);
        ctx.fill();
        
        // Reset shadow for other drawing operations
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(render);
    };

    // Start render loop
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('load', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [nodes, pulseScale]);

  return (
    <section className="project" id="projects" ref={sectionRef}>
      {/* Fullscreen canvas fixed in the background */}
      <canvas 
        className="neural-network-bg"
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      <div className="animated-bg">
        {/* Increased number of particles with brighter colors */}
        {[...Array(100)].map((_, index) => (
          <div key={index} 
            className="particle"
            style={{
              '--particle-speed': `${Math.random() * 30 + 10}s`,
              '--particle-x': `${Math.random() * 100}%`,
              '--particle-delay': `${Math.random() * 5}s`,
              '--particle-size': `${Math.random() * 25 + 8}px`,
              '--particle-color': `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.3})`
            }}
          />
        ))}
      </div>
      <style jsx>{`
        .project {
          position: relative;
          overflow: hidden;
          background: #000000;
          min-height: 100vh;
        }
        .animated-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }
        .particle {
          position: absolute;
          background: var(--particle-color);
          border-radius: 50%;
          left: var(--particle-x);
          animation: float var(--particle-speed) infinite linear;
          animation-delay: var(--particle-delay);
          opacity: 0.8; /* Higher base opacity */
          box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.6); /* Glow effect */
          pointer-events: none;
        }
        @keyframes float {
          0% {
            transform: translateY(-100%) rotate(0deg);
          }
          100% {
            transform: translateY(1000%) rotate(360deg);
          }
        }
        .neural-network-bg {
          opacity: 0.5; /* Increased opacity from 0.3 to 0.5 */
          pointer-events: none;
        }
        .container {
          position: relative;
          z-index: 1;
        }
        /* Enhanced timeline styling */
        .timeline-container {
          position: relative;
          z-index: 1;
        }
        .timeline-item {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease;
          position: relative;
          z-index: 2;
        }
        .timeline-item.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        .timeline-content {
          background: rgba(30, 30, 40, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
          padding: 20px;
          backdrop-filter: blur(5px);
        }
        .timeline-img-container {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          margin-bottom: 15px;
        }
        .timeline-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .timeline-img-container:hover .timeline-overlay {
          opacity: 1;
        }
        .timeline-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 8px 16px;
          border-radius: 4px;
          text-decoration: none;
          border: 1px solid white;
          transition: all 0.3s ease;
        }
        .timeline-btn:hover {
          background: rgba(255, 255, 255, 0.4);
        }
        #timeline-nav {
          border-radius: 50px;
          overflow: hidden;
          background: rgba(20, 20, 30, 0.3);
          backdrop-filter: blur(8px);
          padding: 5px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 2;
        }
        #timeline-nav .nav-link {
          color: rgba(255, 255, 255, 0.7);
          border-radius: 25px;
          padding: 10px 20px;
          transition: all 0.3s ease;
        }
        #timeline-nav .nav-link.active {
          background: linear-gradient(45deg, #aa367c, #4a2fbd);
          color: white;
          box-shadow: 0 5px 15px rgba(170, 54, 124, 0.4);
        }
        h2, h3, h4, p {
          position: relative;
          z-index: 2;
        }
      `}</style>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""} ref={timelineRef}>
                  <h2>Projects & Open Source Work</h2>
                  <p>
                    Passionate about problem-solving and software development, I actively work on projects that showcase my skills in data structures, 
                    algorithms, and real-world applications. My contributions to open-source communities reflect my commitment to collaborative coding, 
                    learning, and innovation.
                  </p>

                  {/* Timeline Navigation */}
                  <ul className="nav nav-pills mb-5 justify-content-center align-items-center" id="timeline-nav">
                    <li className="nav-item">
                      <a className="nav-link active" href="#personal-projects">Personal Projects</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#open-source">Open Source</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#profiles">Coding Profiles</a>
                    </li>
                  </ul>

                  {/* Personal Projects Timeline */}
                  <div id="personal-projects" className="mb-5" style={{ display: activeSection === 'personal-projects' ? 'block' : 'none' }}>
                    <h3 className="text-center mb-4">Personal Projects</h3>
                    <motion.div 
                      className="timeline-container"
                      variants={timelineContainerVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                    >
                      {gitProjects.map((project, index) => (
                        <motion.div 
                          key={index} 
                          className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${isInView ? 'in-view' : ''}`}
                          variants={timelineItemVariants}
                          custom={index}
                        >
                          <div className="timeline-content">
                            <div className="timeline-img-container">
                              <img src={project.imgUrl} alt={project.title} />
                              <div className="timeline-overlay">
                                <a href={project.prof} target="_blank" rel="noopener noreferrer" className="timeline-btn">
                                  View Project
                                </a>
                              </div>
                            </div>
                            <div className="timeline-text">
                              <span className="timeline-date">{project.period}</span>
                              <h4>{project.title}</h4>
                              <p>{project.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Open Source Contributions Timeline */}
                  <div id="open-source" className="mb-5" style={{ display: activeSection === 'open-source' ? 'block' : 'none' }}>
                    <h3 className="text-center mb-4">Open Source Contributions</h3>
                    <motion.div 
                      className="timeline-container"
                      variants={timelineContainerVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                    >
                      {openSourceContributions.map((contrib, index) => (
                        <motion.div 
                          key={index} 
                          className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${isInView ? 'in-view' : ''}`}
                          variants={timelineItemVariants}
                          custom={index}
                        >
                          <div className="timeline-content">
                            <div className="timeline-text">
                              <span className="timeline-date">{contrib.period}</span>
                              <h4>{contrib.title}</h4>
                              <p>{contrib.description}</p>
                              <a href={contrib.url} target="_blank" rel="noopener noreferrer" className="timeline-link">
                                View Pull Request
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Profiles in Grid Format */}
                  <div id="profiles" className="mt-5" style={{ display: activeSection === 'profiles' ? 'block' : 'none' }}>
                    <h3 className="text-center mb-4">Coding Profiles</h3>
                    <Row className="justify-content-center">
                      {profiles.map((profile, index) => (
                        <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                          <div className="proj-imgbx">
                            <img src={profile.imgUrl} alt={profile.title} />
                            <div className="proj-txtx">
                              <h4>{profile.title}</h4>
                              <span>{profile.period}</span>
                              <br />
                              <a href={profile.prof} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">
                                Visit Profile
                              </a>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};