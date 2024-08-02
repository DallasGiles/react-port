import React from 'react';
import profileImage from '../assets/images/profile.jpg';

const About = () => {
  return (
    <section>
      <h2>About Me</h2>
      <img src={profileImage} alt="Developer Avatar" />
      <p>Short bio about the developer...</p>
    </section>
  );
};

export default About;