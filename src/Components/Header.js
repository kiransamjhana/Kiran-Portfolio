import React from "react";

export const Header = () => {
  return (
    <div>
      <header>
        <div class="container flex header">
          <div class="logo flex">
            <div>
              <h1>Kiran</h1>
            </div>
            <div>
              <h1 class="line">Fronted Developer</h1>
            </div>
          </div>
          <div class="menu">
            <input type="checkbox" id="check" />
            <label for="check" class="menu-icon">
              <i class="fa-solid fa-bars"></i>
              <div class="contents">
                <a href="#home">Home</a>
                <a href="#skills">Skills </a>
                <a href="#projects">Projects </a>
                <a href="#about-me">About </a>
                <a href="#contact">Contact</a>
              </div>
            </label>

            <ul class="navigation flex">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#skills">Skills </a>
              </li>
              <li>
                <a href="#projects">Projects </a>
              </li>
              <li>
                <a href="#about-me">About </a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};
