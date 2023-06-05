import React from "react";

export const Projects = () => {
  return (
    <div>
      <section class="projects container" id="projects">
        <h2 class="title">My Recent Work</h2>
        <div class="grid projects-container">
          <div class="project-card flex">
            <div class="top">
              <img src="./assest/img/screen.jpg" alt="project" />
            </div>
            <div class="bottom container">
              <h3>Full-Stack Web App Build with React</h3>
              <p>20 April 2023</p>
            </div>
          </div>
          <div class="project-card flex">
            <div class="top">
              <img src="./assest/img/screen.jpg" alt="project" />
            </div>
            <div class="bottom container">
              <h3>Full-Stack Web App Build with React</h3>
              <p>20 April 2023</p>
            </div>
          </div>
          <div class="project-card flex">
            <div class="top">
              <img src="./assest/img/screen.jpg" alt="project" />
            </div>
            <div class="bottom container">
              <h3>Full-Stack Web App Build with React</h3>
              <p>20 April 2023</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
