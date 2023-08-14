import React from 'react';
import photo from "./photo.png"

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p id='me'>
        Highly motivated Full Stack Developer who enjoys cooking with my family and gardening. 
      </p>
      <img src={photo} width={"250px"} height={"250px"}/>
    </section>
  );
}

export default About;
