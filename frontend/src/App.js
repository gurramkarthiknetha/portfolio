import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Helmet } from "react-helmet";

function App() {
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
