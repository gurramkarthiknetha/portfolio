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
        <title>Karthik Gurram | Portfolio</title>
        <meta name="description" content="Full Stack Developer with expertise in React, Node, and more." />
        <meta name="keywords" content="Karthik,Gurram karthik, Portfolio, React Developer, Full Stack, Web Developer" />
        <meta property="og:title" content="Karthik Gurram Portfolio" />
        <meta property="og:description" content="Showcasing projects and skills of Karthik Gurram." />
        <meta property="og:url" content="https://gurramkarthik.vercel.app/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://gurramkarthik.vercel.app/" />
        <script type="application/ld+json">{`
          {
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Karthik Gurram",
            "url": "https://gurramkarthik.vercel.app",
            "sameAs": [
              "https://www.linkedin.com/in/karthik-gurram-b7516b293/",
              "https://github.com/KarthikGurram24"
            ],
            "jobTitle": "Full Stack Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "VNRVJIET"
            }
          }
        `}</script>
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
