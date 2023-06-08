import React from "react";

export const ContactMe = () => {
  return (
    <div>
      {" "}
      <section class="contact container" id="contact">
        <h2 class="title">Get In Touch</h2>
        <div class="social flex">
          <a href="https://www.linkedin.com/in/prem-acharya/" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-square-facebook"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
        <h3>OR</h3>
        <h4> kiran </h4>
        <h5> sammazy</h5>
        {/* new line of comments is intall
and email is send to this address of the schoool uniform and people will look after what they are been waiting to see  */}
        <a href="mailto:manandharkiran90@gmail.com">
          <div class="email-section flex">
            <div class="email flex">
              <span> myemail@gmail.com </span>

              <div class="send flex">
                <i class="fa-solid fa-paper-plane"></i>
              </div>
            </div>
          </div>
        </a>
      </section>
    </div>
  );
};
