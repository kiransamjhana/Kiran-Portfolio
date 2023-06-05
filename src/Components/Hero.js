import React from "react";

export const Hero = () => {
  return (
    <div>
      <section className="container hero-section" id="home">
        <div className="hero">
          <div className="flex left">
            <div>
              Hi i'm
              <span className="name">Kiran Manandhar</span>
            </div>
            <div className="tag">Fronted Developer</div>
            <p>I love coding and love to develop website.</p>
            <div>
              <button>
                Download CV <i className="fa-solid fa-download"></i>
              </button>
            </div>
          </div>
          <div className="right flex">
            <img src="./assest/link.jpg" alt="profile images" />
          </div>
        </div>
      </section>
    </div>
  );
};
