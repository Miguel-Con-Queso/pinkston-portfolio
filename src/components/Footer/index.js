import React from "react";

function Footer() {
  return (
    <footer className="footer sticky-bottom">
      <a href="https://github.com/Miguel-Con-Queso" target="_blank">
        <img
          src="https://img.icons8.com/color/64/000000/github--v3.png"
          alt="Michael Pinkston's Github"
          className="icon"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/michael-k-pinkston-955bb3208/"
        target="_blank"
      >
        <img
          src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-linkedin-social-media-justicon-flat-justicon.png"
          alt="Michael Pinkston's LinkedIn"
          className="icon"
        />
      </a>
      <a href="mailto: mkpinkston@my.milligan.edu" target="_blank">
        <img
          src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-email-notifications-justicon-lineal-color-justicon.png"
          alt="Michael Pinkston's Email"
          className="icon"
        />
      </a>
    </footer>
  );
}

export default Footer;
