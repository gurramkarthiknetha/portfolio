import { Col } from "react-bootstrap";
import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';

export const ProjectCard = ({ title, description, imgUrl, prof, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Spring animation for hover effect
  const cardAnimation = useSpring({
    transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0px) scale(1)',
    boxShadow: isHovered
      ? '0 20px 40px rgba(170, 54, 124, 0.3)'
      : '0 5px 15px rgba(0, 0, 0, 0.1)',
    config: { tension: 300, friction: 30 }
  });

  // Image zoom animation
  const imageAnimation = useSpring({
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    config: { tension: 300, friction: 30 }
  });

  // Overlay animation
  const overlayAnimation = useSpring({
    opacity: isHovered ? 1 : 0,
    transform: isHovered ? 'translateY(0%)' : 'translateY(100%)',
    config: { tension: 300, friction: 30 }
  });

  return (
    <Col size={12} sm={6} md={4} data-aos="fade-up" data-aos-delay={index * 100}>
      <animated.div
        style={cardAnimation}
        className="enhanced-project-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a href={prof} target="_blank" rel="noopener noreferrer" className="proj-link">
          <div className="proj-imgbx enhanced-proj-imgbx">
            <div className="image-container">
              <animated.img
                style={imageAnimation}
                src={imgUrl}
                height={"200"}
                alt={title}
                loading="lazy"
              />
            </div>
            <animated.div style={overlayAnimation} className="proj-txtx enhanced-proj-txtx">
              <h4>{title}</h4>
              <p>{description}</p>
              <span className="view-project">View Project →</span>
            </animated.div>
          </div>
        </a>
      </animated.div>
    </Col>
  );
};
