import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { useSpring, animated, useTrail } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  // Intersection Observer for triggering animations
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Spring animation for the main container
  const containerAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 280, friction: 60 },
    delay: 200
  });

  // Skills data for trail animation
  const skillsData = [
    { img: meter1, title: "Web Development" },
    { img: meter2, title: "App Development" },
    { img: meter3, title: "Python" },
    { img: meter1, title: "Machine Learning" }
  ];

  // Trail animation for skill items
  const trail = useTrail(skillsData.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.9)',
    config: { tension: 280, friction: 60 },
    delay: 400
  });

  return (
    <section className="skill" id="skills" ref={ref}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <animated.div style={containerAnimation} className="skill-bx enhanced-skill-bx">
                        <h2 data-aos="fade-up" data-aos-delay="100">Skills</h2>
                        <p data-aos="fade-up" data-aos-delay="200">
                          I'm a versatile developer skilled in web and app development, specializing in React, Next.js, and Flutter.
                          I work with HTML, CSS, Tailwind, Bootstrap, JavaScript, TypeScript, and Dart for frontend development.
                          On the backend, I have experience with Node.js, Python, Java, C, and C++, along with databases like MySQL,
                          PostgreSQL, and MongoDB. I also have a strong foundation in Data Structures and Algorithms (DSA),
                          enabling me to write optimized and efficient code
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider enhanced-carousel">
                            {trail.map((style, index) => (
                                <animated.div key={index} style={style} className="item enhanced-skill-item">
                                    <div className="skill-icon-wrapper">
                                        <img src={skillsData[index].img} alt="Skill" />
                                    </div>
                                    <h5>{skillsData[index].title}</h5>
                                </animated.div>
                            ))}
                        </Carousel>
                    </animated.div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  )
}
