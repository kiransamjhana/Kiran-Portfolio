import React from 'react'

export const Footer = () => {
  return (
    <div><footer className="footer">
    <div className="container">
      <div className="top flex">
        <div className="links">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact-me">Contact</a>
            </li>
          </ul>
        </div>
        <div className="socials">
          <h3>Social Link</h3>
          <ul>
            <li>
              <a href="">LinkediN</a>
            </li>
            <li>
              <a href="">Facebooks</a>
            </li>
            <li>
              <a href="">Githubss</a>
            </li>
            <li>
              <a href="">Ylllllyoutuube</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        &copy; copy right all reserved | Made by myself
      </div>
    </div>
  </footer>
  <a href="#home">
    <div className="go-up flex">
      <i className="fa-solid fa-angle-up"></i>
    </div>
  </a>
</div>
</div></div>
  )
}
