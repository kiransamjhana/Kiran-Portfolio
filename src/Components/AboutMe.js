import React from "react";

export const AboutMe = () => {
  return (
    <div>
      <section class="about container" id="about-me">
        <h2 class="title">About Me</h2>

        <div class="flex about-content">
          <div class="myimg">
            <img src="./assest/link.jpg" alt="prem's image" />
          </div>

          <div class="my-bio">
            <h2>Kiran Manandhar</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis necessitatibus aut alias neque animi dolorum
              doloremque pariatur beatae
            </p>

            <p>
              odit rem incidunt repellendus quasi mollitia officiis dolorem,
              iste accusantium optio quidem!
            </p>

            <p>Sydney, Australia</p>

            <div>
              <div class="tag">Interest</div>

              <div class="flex">
                <span>Coding</span>
                <span>Football</span>
                <span>Moview</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
