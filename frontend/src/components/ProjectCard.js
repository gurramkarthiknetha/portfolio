import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, prof }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={prof} target="_blank" rel="noopener noreferrer" className="proj-link">
        <div className="proj-imgbx">
          <img src={imgUrl} height={"100"} alt={title} />
          <div className="proj-txtx">
            <h4 style={{color:"black"}} >{title}</h4>
            <span style={{color:"white"}} >Click here to open ...</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
