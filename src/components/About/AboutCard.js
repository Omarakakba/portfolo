import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Bonjour à tous, je suis <span className="purple">Akakba Omar  </span>
            de <span className="purple"> Fleury-Mérogis, France.</span>
            <br />
            Actuellement, je suis un étudiant en 2ème année de BTS SIO (services informatiques aux organisations)
            <br />
            En dehors du codage, quelques autres activités que j’adore faire !
          
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />🎮 Jouer à des jeux
            </li>
            <li className="about-activity">
              <ImPointRight />📚 Lire des livres
            </li>
            <li className="about-activity">
              <ImPointRight />🛩️ Voyager
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
