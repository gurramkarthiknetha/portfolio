import { useState, useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/gurramkarthik.JPG";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import { useSpring, animated, useTrail } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const toRotate = useMemo(() => ["Web Developer", "App Developer", "Open Source Contributor"], []);

  // Intersection Observer for triggering animations
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Spring animations for the main content
  const fadeInUp = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 280, friction: 60 },
    delay: 200
  });

  const slideInLeft = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0px)' : 'translateX(-100px)',
    config: { tension: 280, friction: 60 },
    delay: 400
  });

  const slideInRight = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0px)' : 'translateX(100px)',
    config: { tension: 280, friction: 60 },
    delay: 600
  });

  // Floating animation for the profile image
  const floatingAnimation = useSpring({
    loop: true,
    to: [
      { transform: 'translateY(-10px)' },
      { transform: 'translateY(10px)' }
    ],
    from: { transform: 'translateY(0px)' },
    config: { duration: 3000 }
  });

  // Trail animation for text elements
  const textElements = [
    "Welcome to my Portfolio",
    `Hi! I'm Karthik Gurram`,
    "I am a Aspiring Data Scientist | GSoC Enthusiast | B.Tech Student from VNRVJIET"
  ];

  const trail = useTrail(textElements.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    config: { tension: 280, friction: 60 },
    delay: 800
  });

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    let ticker = setInterval(tick, delta);
    return () => { clearInterval(ticker) };
  }, [text, delta, isDeleting, loopNum, period, toRotate]);

  return (
    <section className="banner" id="home" ref={ref}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            <animated.div style={slideInLeft} className="profile-image-container">
              <animated.div style={floatingAnimation}>
                <img 
                  style={{ 
                    borderRadius: "50%", 
                    boxShadow: "0 20px 40px rgba(170, 54, 124, 0.3)",
                    border: "3px solid rgba(255, 255, 255, 0.1)"
                  }} 
                  src={headerImg} 
                  alt="Header Img" 
                  loading="lazy" 
                />
              </animated.div>
            </animated.div>
          </Col>

          <Col xs={12} md={6} xl={7}>
            <animated.div style={slideInRight}>
              {trail.map((style, index) => (
                <animated.div key={index} style={style}>
                  {index === 0 && <span className="tagline">{textElements[index]}</span>}
                  {index === 1 && (
                    <h1>
                      {textElements[index]}{' '}
                      <span className="txt-rotate">
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                  )}
                  {index === 2 && <h2>{textElements[index]}</h2>}
                </animated.div>
              ))}
              
              <animated.p style={fadeInUp}>
                Currently pursuing a B.Tech degree from VNR Vignana Jyothi Institute of Engineering & Technology, 
                with a strong passion for data science and innovation. I am driven by the goal of cracking the 
                Google Summer of Code (GSoC) and building a career as a data scientist. With a commitment to 
                continuous learning and skill-building, I am on a path to make impactful contributions to the 
                tech industry. Expected to graduate in 2027.
              </animated.p>
              
              <animated.div style={fadeInUp}>
                <Router>
                  <HashLink to='#connect'>
                    <button className="vvd enhanced-button">
                      <span>Let's Connect <ArrowRightCircle size={25} /></span>
                    </button>
                  </HashLink>
                </Router>
              </animated.div>
            </animated.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
