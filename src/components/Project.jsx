import React from 'react';

const Project = ({ title, imageUrl, appLink, repoLink }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={imageUrl} alt={`${title} screenshot`} />
      <div>
        <a href={appLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
    </div>
  );
};

export default Project;