import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Laissez moi me  <span className="purple"> Presanter </span> 
            </h1>
            <p className="home-about-body">
            J’ai plongé dans la programmation et j’ai au moins retenu quelque chose… enfin, je crois. 🤷‍♂️
              <br />
              <br /> Je maîtrise bien les langages HTML, CSS3, PHP, JAVA, C#
              <i>
                <b className="purple">  HTML, CSS3, PHP, JAVA, C# </b>
              </i>
              <br />
              <br />
              Je m’intéresse au développement d’applications et de solutions logicielles, en particulier avec les &nbsp;
              <i>
                <b className="purple"> Technologies WEB </b> et 
                les architectures modernes.{" "}
                <b className="purple">
                  .
                </b>
              </i>
              <br />
              <br />
              Dès que possible, j’applique mes compétences en  <b className="purple">Python, C# </b> et développement d’applications WPF
              <i>
               
              </i>
              &nbsp; pour créer des projets innovants et fonctionnels.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TROUVEZ-MOI SUR</h1>
            <p>
            N’hésitez pas à me <span className="purple">contacter </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
