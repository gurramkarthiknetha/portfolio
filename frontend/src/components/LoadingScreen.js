import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

export const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Progress animation
  const progressAnimation = useSpring({
    width: `${progress}%`,
    config: { tension: 280, friction: 60 }
  });

  // Loading screen fade out animation
  const fadeAnimation = useSpring({
    opacity: isComplete ? 0 : 1,
    transform: isComplete ? 'scale(1.1)' : 'scale(1)',
    config: { tension: 300, friction: 30 },
    onRest: () => {
      if (isComplete && onLoadingComplete) {
        onLoadingComplete();
      }
    }
  });

  // Logo animation
  const logoAnimation = useSpring({
    from: { transform: 'scale(0) rotate(0deg)', opacity: 0 },
    to: { transform: 'scale(1) rotate(360deg)', opacity: 1 },
    config: { tension: 280, friction: 60 },
    delay: 200
  });

  // Text animation
  const textAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 280, friction: 60 },
    delay: 800
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsComplete(true), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <animated.div style={fadeAnimation} className="loading-screen">
      <div className="loading-content">
        <animated.div style={logoAnimation} className="loading-logo">
          <div className="logo-circle">
            <span>KG</span>
          </div>
        </animated.div>
        
        <animated.div style={textAnimation} className="loading-text">
          <h2>Karthik Gurram</h2>
          <p>Full Stack Developer</p>
        </animated.div>
        
        <div className="loading-progress">
          <div className="progress-bar">
            <animated.div style={progressAnimation} className="progress-fill"></animated.div>
          </div>
          <span className="progress-text">{Math.round(progress)}%</span>
        </div>
      </div>
      
      <div className="loading-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i}`}></div>
        ))}
      </div>
    </animated.div>
  );
};
