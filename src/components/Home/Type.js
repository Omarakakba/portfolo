import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Développeur Logiciel",
          "Étudiant en BTS SIO SLAM",
          "MERN Stack Developer",
          "Passionné par le Code et l’Innovation",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
