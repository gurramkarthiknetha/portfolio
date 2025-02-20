import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/gurramkarthik.JPG";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "App Developer", "open source contributor" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

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
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={5}>
            <TrackVisibility >
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img style={{ borderRadius: "50%" }} src={headerImg} alt="Header Img"/>

                </div>}
            </TrackVisibility>
          </Col>
          
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Karthik Gurram`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "App Developer", "Open source Contributor" ]'><span className="wrap">{text}</span></span></h1>
                <h2>I am a <span className="txt-rotate" data-period="2000" ></span>Aspiring Data Scientist | GSoC Enthusiast | B.Tech Student from VNRVJIET</h2>
                  <p>
                  Currently pursuing a B.Tech degree from VNR Vignana Jyothi Institute of Engineering & Technology, with a strong passion for data science and innovation. I am driven by the goal of cracking the Google Summer of Code (GSoC) and building a career as a data scientist. With a commitment to continuous learning and skill-building, I am on a path to make impactful contributions to the tech industry. Expected to graduate in 2027.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>

        </Row>
      </Container>
    </section>
  )
}
