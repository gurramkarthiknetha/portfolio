import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LoadingScreen } from "./components/LoadingScreen";
import { Helmet } from "react-helmet";
import { useEffect, useState } from 'react';
import AOS from 'aos';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="App">
      <Helmet>
        <title>Karthik Gurram | Full Stack Developer</title>
        <meta name="description" content="Portfolio of Karthik Gurram, a full stack web developer with experience in React, Node, and more." />
        <meta name="keywords" content="Karthik Gurram, web developer, React, portfolio, full stack" />
        <meta property="og:title" content="Karthik Gurram Portfolio" />
        <meta property="og:url" content="https://gurramkarthik.vercel.app/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
