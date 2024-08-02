import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Project 1',
    imageUrl: 'path/to/image1.jpg',
    appLink: 'http://deployed-app1.com',
    repoLink: 'http://github.com/repo1',
  },
  // Add more projects here...
];

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;