import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img
              src={logo}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover' 
              }}
              alt="Logo"
            />

          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/karthik-gurram-48b78228a/"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/KarthikGurram24"><img src={navIcon2} alt="GitHub" /></a>
              <a href="https://twitter.com/KarthikGurram24"><img src={navIcon3} alt="Twitter" /></a>
            </div>
            <p>Copyright 2027. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
